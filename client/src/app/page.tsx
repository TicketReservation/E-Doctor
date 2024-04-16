"use client"
import Image from "next/image";
import DoctorRates from "./doctorrates/doctorrates";
import Navbar from "./navbar/navbar";
import ContactUs from "./contact/page";
import Footer from "./footer/footer";
import Reviews from "./reviews/reviews";

export default function Home() {
  return ( 
    <div>
      <Navbar/>
      <Reviews/>
      <DoctorRates/>
      {/* <ContactUs/> */}
      <Footer/>
       </div>
 )
  }
