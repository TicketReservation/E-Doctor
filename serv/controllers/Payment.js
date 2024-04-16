const express = require('express');
const axios = require('axios');

const app = express(); // Creating an instance of Express

// Middleware for parsing JSON bodies
app.use(express.json());

// POST route for adding payment
app.post('/api/add', async (req, res) => {
  const url = "https://developers.flouci.com/api/generate_payment";
  const pay = {
    "app_token": "6e289555-acfc-4625-9e3f-950f8c6c7b30",
    "app_secret": process.env.FLOUCI_SECRET,
    "amount": req.body.amount,
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "http://localhost:3000/client/cart/success",
    "fail_link": "http://localhost:3000/client/cart/fail",
    "developer_tracking_id": "13360cca-3c0b-451f-b4c0-427d9bdd035d"
  };
  try {
    const result = await axios.post(url, pay);
    res.send(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// GET route for verifying payment
app.get('/api/verify/:id', async (req, res) => {
  try {
    const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'apppublic': '3ae91c05-02b2-4f92-9de8-bfcd08847afb',
          'appsecret': '6a2f00e1-f15d-451c-82ba-149a5c5b4afb'
        }
      });
    res.send(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
