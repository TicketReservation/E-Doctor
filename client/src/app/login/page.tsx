"use client"
import React, { useState } from 'react';
import styles from "./login.module.css"
import { connect } from 'react-redux';
import axios from "axios";
import Navbar from '../navbar/navbar';


const Login = ({ login, loginFailure, error }) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { Email, Password }
      );
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userType", user.UserType);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("user", JSON.stringify(user)); // Store user object as a string
      login({ user, token });
      handleRedirect(user.UserType);
      console.log('====================================');
console.log(user.UserType);
console.log('====================================');
      console.log(response.data);
    } catch (error) {
      loginFailure(error.response.data.error);
    }
  };

  const handleRedirect = (userType) => {
    if (userType === 'Doctor') {
      window.location.href = "/doctor";
    } else if (userType === 'Patient') {
      window.location.href = "/";
    }
   
  };

  return (
    <div>
      <Navbar/>
      <div className={styles.frmmm} >

        <form onSubmit={HandleSubmit}>
          <h2 style={{ color: '#007e85', marginLeft: '110px' }}>Login</h2>
          <div className={styles.containerrr}>
          <input  className={styles.innnput} type="email" placeholder="Email"  value={Email}  onChange={(e) => setEmail(e.target.value)} 
  required 
/>

          </div>
          <div    >
            <input  className={styles.innnput} 

    type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p  className={styles.ppp}>{error}</p>}
          <button    className={styles.bbutton}   

>Login</button>



        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error // Assuming error is stored in Redux state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: ({ user, token }) => dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } }),
    loginFailure: (error) => dispatch({ type: "LOGIN_FAILURE", payload: error })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
