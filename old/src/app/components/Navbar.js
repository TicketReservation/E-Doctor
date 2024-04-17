"use client"
import React, { useState, useEffect } from "react";
// import "../css/Navbar.css";
// import { Link,usenavigate.push} from "react-router-dom";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [temp, setTemp] = useState("/login");
  const navigate= useRouter()

  useEffect(() => {
    if(localStorage.getItem("userType")==='Doctor') {setTemp('/doctor')}
    if(localStorage.getItem("userType")==='Patient') {setTemp('/patient')}
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
    else {
      setIsLogged(false);
    }

  }, [isLogged,isDropdownOpen]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("userId"); 
    navigate.push("/login")
    setIsLogged(false);
  }
  return (
    <div className="divNavbar">
      <div className="logoContainer">
      {/* <Image
  className="logo"
  src="https://s3-alpha-sig.figma.com/img/efb1/3ff6/87f33e562a35e98a4b2866ad981588b7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNsCo6gSwajGhMArLnkzchWJ5F9xwvZDQH9p3EcC9xdhLn6VIhjM64xCh1rPdNMXVltTUAaQbCTrOwgHDza5Fb2V6XDtxhGdmQZnHl~1F4j~ovOIIEo2MiUWwVZ4H1Vb6FnmVofNZVZ4DXWjdrJnDbAUVgZ1042bqZYWGg7lRZoFyZFKNR834T0P5maRuW-sdgZh4L3306qQ7BsODW34QnanQgpG2mE-E2Ml1bu2-dJPx80a0U42xLTfd3t6uixITTIgsOqiSmObVqc8lMRT5A67UWec8CUdy8LWANYxWLBgPFsoMG-5~YLwJk4896iT5iqiyHK8HHWvimwqtcLAAg__"
  alt="Logo"
  onClick={() => {
    if(localStorage.getItem("userType")==='Doctor') {router.push('/doctor')}
    if(localStorage.getItem("userType")==='Patient') {router.push('/patient')}
  }}
/> */}
       <Link href={"/"} style={{ textDecoration: 'none' }} legacyBehavior>
  <h2>
    {/* health<font color="#6eab36">care</font> */}
  </h2>
</Link>
      </div>
      <div className="navLinks">
        <Link href={"/"} className="Home">
          HOME
        </Link>
        <Link href={"/service"} className="Service">
          
            Service
          
        </Link>
        <Link href={"/contact"} className="Contact">
          
            Contact Us
          
        </Link>
        <Link href={"/bloglist"} className="Contact">
          
            Blogs
          
        </Link>
        <Link href={"/Pharmacy"} className="Contact">
          
            Pharmacy
          
        </Link>
        <Link href={"/doctorlist"} className="Contact">
          
            Doctors
          
        </Link>
      
        <Link href={temp} className="Contact">
          
            Profile
          
        </Link>

        {isLogged ? (
          <div className="dropdown">
            <a className="Profile" onClick={toggleDropdown}>
              <Image
                className="profileIcon"
                src="https://s3-alpha-sig.figma.com/img/efb1/3ff6/87f33e562a35e98a4b2866ad981588b7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNsCo6gSwajGhMArLnkzchWJ5F9xwvZDQH9p3EcC9xdhLn6VIhjM64xCh1rPdNMXVltTUAaQbCTrOwgHDza5Fb2V6XDtxhGdmQZnHl~1F4j~ovOIIEo2MiUWwVZ4H1Vb6FnmVofNZVZ4DXWjdrJnDbAUVgZ1042bqZYWGg7lRZoFyZFKNR834T0P5maRuW-sdgZh4L3306qQ7BsODW34QnanQgpG2mE-E2Ml1bu2-dJPx80a0U42xLTfd3t6uixITTIgsOqiSmObVqc8lMRT5A67UWec8CUdy8LWANYxWLBgPFsoMG-5~YLwJk4896iT5iqiyHK8HHWvimwqtcLAAg__"
                alt="Profile Icon"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href={"/signup"} className="Sign">
              
                Sign Up
              
            </Link>
            <Link href={"/login"} legacyBehavior>
              <button className="Log">Log In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
