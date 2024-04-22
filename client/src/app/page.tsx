"use client"
import Image from "next/image";
import DoctorRates from "./doctorrates/page";
import Navbar from "./navbar/page";
import ContactUs from "./contact/page";
import UserProfilePage from "./userprofile/page";
import Footer from "./footer/footer";
import Reviews from "./reviews/reviews";
import Doctordashboard from "./DoctorDashboard/doctordashboard";
import BookAppointment from "./appointment/page";
import DoctorProfilePage from "./DoctorProfile/DoctorProfilePage";
import ServicesPage from "./service/page";

export default function Home() {
  return ( 
    <div>
      <Navbar/>
      {/* <ServicesPage/> */}
      {/* <Reviews/> */}
      {/* <DoctorRates/> */}
      {/* <ContactUs/> */}
      <BookAppointment />
      {/* <DoctorProfilePage/> */}
      {/* <UserProfilePage/> */}
      <Footer/> 
       </div>
 )
  }
