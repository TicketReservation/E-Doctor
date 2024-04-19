const express = require('express');
const { Add } = require('../controllers/Payment');
const router = express.Router();




router.post('/payment', Add);


module.exports = router;