"use client"
import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/footer';
import Reviews from '../reviews/reviews';
import ReactStars from 'react-stars';
import styles from "./doctorrates.module.css"


// Define the interface for DoctorRates component

// Functional component DoctorRates
const DoctorRates = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Reviews />
            <div className={styles.inputContainerdocrates}>
                <h1 style={{ textAlign: 'center' }}>Doctor Rates</h1>
             
                <h1 style={{ textAlign: 'center' }}>Write a Review</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address:</label><br></br>
                        <input type="email" className={styles.allInputrates} id="exampleFormControlInput1" placeholder="" /><br></br>
                        <label htmlFor="exampleFormControlInput1">Name:</label><br></br>
                        <input type="text" className={styles.allInputrates} id="exampleFormControlInput1" placeholder="" /><br></br>
                        <label htmlFor="exampleFormControlInput1">Comment:</label><br></br>
                        <input type="text" className={styles.allInputrates} id="exampleFormControlInput1" placeholder="" /><br></br>
                        <label htmlFor="exampleFormControlInput1">Rate:</label><br></br>
                        <div style={{marginBottom:'20px'}}>
                            <ReactStars count={5} size={24} color2={'#ffd700'} />
                        </div>
                    </div>
                    <button type="submit" className={styles.submit}>Submit</button>
                </form>

            </div>
            <br/>
            {/* <Footer /> */}
        </div>
    );
}

export default DoctorRates;
