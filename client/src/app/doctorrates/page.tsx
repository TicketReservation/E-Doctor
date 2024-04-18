import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';
import styles from "./doctorrates.module.css"
import axios from 'axios';

// Define the interface for DoctorRates component
const add = (id, body) => {
  axios.post("http://localhost:4000/api/ratingComments/add", id, body)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
}

const DoctorRates = () => {
  const [name, setname] = useState("")
  const [rating, setrating] = useState(5)
  const [imageSrc, setimageSrc] = useState("")
  const [review, setreview] = useState("")
  const [Id, setId] = useState(null)

  const addReview = () => {
    add(Id, {
      name: name,
      rating: rating,
      review: review,
      imageSrc: imageSrc,
      Id: Id
    })
  }

  // Functional component DoctorRates
  return (
    <div>
      {/* <Navbar /> */}

      <div className={styles.inputContainerdocrates}>
        <h1 style={{ textAlign: 'center' }}>Doctor Rates</h1>
        {/* <Reviews /> */}
        <h1 style={{ textAlign: 'center' }}>Write a Review</h1>
        <form>
          <div className="form-group">
            {/* <label htmlFor="exampleFormControlInput1">Email address:</label><br></br>
                        <input type="email" value={} className={styles.allInputrates} id="exampleFormControlInput1" placeholder="" /><br></br> */}
            <label htmlFor="exampleFormControlInput1">Name:</label><br></br>
            <input type="text" value={name} className={styles.allInputrates} id="exampleFormControlInput1" placeholder="" onChange={(e) => setname(e.target.value)} /><br></br>
            <label htmlFor="exampleFormControlInput1">Comment:</label><br></br>
            <input type="text" value={review} className={styles.allInputrates} id="exampleFormControlInput1" placeholder="" onChange={(e) => setreview(e.target.value)} /><br></br>
            <label htmlFor="exampleFormControlInput1">Rate:</label><br></br>
            <div style={{ marginBottom: '20px' }}>
              <ReactStars count={rating} size={24} color2={'#ffd700'} onChange={(e) => setrating(e)} />
            </div>
          </div>
          <button type="submit" className={styles.submit} onClick={addReview}>Submit</button>
        </form>

      </div>
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default DoctorRates;