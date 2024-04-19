"use client"
import React, { useState } from "react";
import { useRouter } from "next/router"
import  Link from "next/link"
import axios from "axios";
import styles from "./sign.module.css"
import Navbar from "../navbar/navbar";
import Dropzone from 'react-dropzone';
import {useAppDispatch ,  useAppSelector} from '../lib/hooks';
import {specialityAsync} from "../lib/features/specialitySlice" 
import { useEffect } from "react";
import { Speciality } from "../types/types";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserType, setUsertype] = useState("");
  const [error, setError] = useState("");
  const [specialityId, setSpecialityId] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const dispatch=useAppDispatch()

  const speciality=useAppSelector(state=>state.speciality.speciality)
  console.log("data",speciality);


  useEffect(()=>{
    dispatch(specialityAsync())
  },[dispatch])



  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        UserType: UserType,
        Username: Username,
        Email: Email,
        Password: Password,
        FirstName: FirstName,
        LastName: LastName,
        PhoneNumber: PhoneNumber,
        imageUrl: image,
        specialityId: specialityId,
      };
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        body
      );
      console.log(response.data);
      setError("");
      window.location.href = "/";
    } catch (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
      setError(err.response.data.error);
      console.log(err.response.data.error);
    }
  };
  const handleImageDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]); 

    try {
      setIsLoading(true); 
      const response = await axios.post("http://localhost:4000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Add this line
        },
      });
      const imageUrl = response.data.imageUrl;
      console.log(imageUrl);
      setImage(imageUrl);
      setIsLoading(false); // Set isLoading to false when image upload is complete
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Set isLoading to false when image upload fails
    }
  };
  return (
    <div>
      <Navbar />
      <div className="form doctor-form" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", marginLeft:'340px',backgroundColor:'white'}}>
              <form onSubmit={HandleSubmit}>
            <h2 style={{ color: "#007E85", marginBottom:'20px',marginLeft:'120px',marginTop:'33px'}}> Sign Up</h2>
            <div>
            <div className="doctor-image">
              <img
                src="https://th.bing.com/th/id/OIP.czYUxy7G0x5DDRsqs9xq0QHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Doctor"
                style={{marginBottom:'20px' , borderRadius:'20%',marginLeft:'50px',marginTop:'20px',background:'transparent'}}
              />
            </div>
            <div>
            <input className={styles.ppt}
              type="text"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input className={styles.ppt}
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input className={styles.ppt}
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input className={styles.ppt}
              type="text"
              placeholder="Phone Number"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div> 
            <input className={styles.ppt}
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input className={styles.ppt}
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div>
              {UserType === "doctor" && (
                
                <select    onChange={(e) => {
                  console.log(e.target.value);
                  setSpecialityId(e.target.value);
                 
                }}
                 name="Speciality" id="Speciality" className={styles.filter_dropdown}>
                {/* <option value="speciality">Speciality</option> */}
                {speciality.map((e:Speciality,i:number)=>{
                  return <option value={e.id}  key={i}>
                    {e.name}
                    </option>
                })}
                </select>
              )}
              <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsertype(e.target.value);
                }}
                required
                style={{
                  marginBottom: "10px",
                  marginLeft: "20px",
                  width: "180px",
                  padding: "5px",
                  borderRadius: "11px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </select>
              {/* <Dropzone onDrop={handleImageDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '2px dashed #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9', color: '#888', fontSize: '16px', cursor: 'pointer' }}>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isLoading ? ( // Show loading screen if isLoading is true
                        <p style={{ margin: '0' }}>Uploading image...</p>
                      ) : (
                        <p style={{ margin: '0' }}>Drag 'n' drop some files here, or click to select files</p>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone> */}
            </div>
          </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Already have an account?
             <Link href="/login">Login</Link>
           
          </p>
          <button type="submit">Sign Up</button>
        </form>
       
      </div>
    </div>
    
  );
};

export default Signup;
