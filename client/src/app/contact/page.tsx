import React from "react";
import styles from "./contact.module.css"; // Import CSS module
import Image from 'next/image';
import hospitalimg from '../img/hospitalimg.png.png'

const ContactUs: React.FC = () => {
  return (
    <>
      <div className={styles.pictureContainerContactus}>
      <Image src={hospitalimg} alt="Example Image" width={500} height={300} />
       
      </div>
      <div className={styles.getInUsContactuss}>
        <p className={styles.getParagraph}>Get in Touch</p>
        <h1 className={styles.getHONE}>Contact Us</h1>
        <p className={styles.getParagraph}>Lorem ipsum dolor sit amat, consecteur adipiscing elit .</p>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.firsLastNameContact}>
            <div className={styles.oneInput}>
              <label>First Name</label>
              <input type="text" placeholder="Enter your first Name" className={styles.allInputContactus} />
            </div>
            <div className={styles.oneInput}>
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last Name" className={styles.allInputContactus} />
            </div>
          </div>

          <div className={styles.emailPhoneNumberContainer}>
            <div className={styles.oneInput}>
              <label>E-mail</label>
              <input type="text" placeholder="Enter your Email" className={styles.allInputContactus} />
            </div>
            <div className={styles.oneInput}>
              <label>Phone Number</label>
              <input type="text" placeholder="Enter you phone Number" className={styles.allInputContactus} />
            </div>
          </div>

          <div className={styles.topicContainer}>
            <div className={styles.oneInput}>
              <label>Choose a topic</label>
              <select name="" id="" className={styles.allInputContactus}>
                <option value="">choukou</option>
              </select>
            </div>
          </div>

          <div className={styles.messageContainer}>
            <div className={styles.inputmssg}>
              <label>Message</label>
              <textarea placeholder="Type your message" className={styles.inputmssg}></textarea>{" "}
            </div>
          </div>

          <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>
      </div>

      <div className={styles.getInUslastmaill}>
        <h1 className={styles.getParagraph}>Subscribe to our newsletter</h1>
        <div className={styles.getInUslastmaill}>
          <input type="email" placeholder="enter your email" className={styles.lastmailinput} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default ContactUs;
