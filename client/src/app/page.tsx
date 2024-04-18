"use client"
import Image from "next/image";
import DoctorRates from "./doctorrates/page";
import Navbar from "./navbar/page";
import ContactUs from "./contact/page";
import Footer from "./footer/footer";
import Reviews from "./reviews/reviews";
import ServicesPage from "./service/page";
import Doctorlist from "./doctorlist/page";
import BookAppointment from "./appointment/page";
export default function Home() {
  return ( 
    <div>
      <Navbar/>
     
      {/* <ServicesPage/> */}
     {/* <Doctorlist/> */}
      {/* <Reviews/>
      <DoctorRates/> */}
      {/* <ContactUs/> */}
      <BookAppointment/>
      <Footer/> 
       </div>
 )
  }
