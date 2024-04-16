"use client"
import Image from "next/image";
import DoctorRates from "./doctorrates";
import Navbar from "./navbar";
import ContactUs from "./contact/page";
import Footer from "./footer";
import Reviews from "./reviews";

export default function Home() {
  return ( 
    <div>
      {/* <Navbar/> */}
      {/* <Reviews/>
      <DoctorRates/> */}
      <ContactUs/>
      {/* <Footer/> */}
       </div>
 )
  }