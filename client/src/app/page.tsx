"use client"
import Image from "next/image";
import DoctorRates from "./doctorrates/page";
import Navbar from "./navbar/page";
import ContactUs from "./contact/page";
import Footer from "./footer/footer";
import Reviews from "./reviews/reviews";
import Doctordashboard from "./DoctorDashboard/doctordashboard";
import Hoome from "./home/page";
export default function Home() {
  return ( 
    <div>
      <Navbar/>
      {/* <Reviews/> */}
      {/* <DoctorRates/> */}
   <Hoome/>
      <Footer/>
      {/* <Doctordashboard/> */}
       </div>
 )
  }
