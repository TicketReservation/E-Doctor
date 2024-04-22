import React, { useState } from "react";
import styled from "styled-components";
import imagehospital from "../../app/img/hospitalimg.png.png"
import axios from "axios";
import { useDispatch } from "react-redux";
// import { sendAppointmentEmail } from "./redux/actions/emailActions";
import { useRouter } from 'next/navigation'
import { DatePicker, TimePicker, Form } from "antd";
import Link from "next/link";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { url } from "inspector";

const Container = styled.div`
  background-image: url("https://s3-alpha-sig.figma.com/img/29a1/83e9/4cfaa1c70f9923b9dff53e831733a031?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPb4iKFpTXsTfzPGJ1UT0k7s5GcYe70I9fmj0E1ha539XGmpRHJu50Wxv-Ecscl~VMqej~MTo8vlyDFUK0mfVD~RWIgy~uZAN8IMAemXPEjBmAQgQgxhlS4fde5YX5sxmc1HtdTeuAgdENZlQ3JbUxf-KHsF~r-Yi1oUl2vWrP-AZ1oPGCEqE3CFh9BGRVCXIphLDTM1WZMDTINSU2AtNJmDCxx4kpF4qeN7w7UyPJSPKq-S6sVwn494l~ftSFtuvPcw4-XeDl-mGOFpjjfo2VCSX1ANAjQh-JuLPsKK97j3All0emM03tnmferVVu3JSWd1tCJetOVk0qUSTr6~pQ__");
  background-size: cover;
  background-position: center;
  display: flex;
  height: 650px; /* Updated height */
`;

const Content = styled.div`
  margin-left: 150px;
  margin-top: 200px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Form1 = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  margin-bottom: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitButton = styled.button`
  background-color: #007E85;
  color: white;
  padding: 10px 20px; /* Increase padding to make the button bigger */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto; /* Center the button horizontally */
  display: block; /* Ensure the button takes up the full width */
`;

interface MyEvent {
  start: Date;
  end: Date;
 title: string;
  color: string;
}

interface BookAppProps {}

const BookApp: React.FC<BookAppProps> = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [time, setTime] = useState("");
  const [User, setUserId] = useState(6);
  const [selectedDate, setSelectedDate] = useState(null);
  const localizer = momentLocalizer(moment);
  const myEventsList: MyEvent[] = [
    {
      start: new Date(2024, 3, 4, 9, 0),
      end: new Date(2024, 3, 4, 12, 0),
      title: "Dr. Smith's Availability",
      color: "#5cb85c", // Green color
    },
    {
      start: new Date(2024, 3, 5, 14, 0),
      end: new Date(2024, 3, 5, 18, 0),
      title: "Dr. Johnson's Availability",
      color: "#f0ad4e", // Orange color
    },
    // More events...
  ];
  const dispatch = useDispatch();
  const router = useRouter()

  const handleDateChange1 = (date: Date | null) => {
    setSelectedDate(date);
  };
 
  

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Selected date:", e.target.value);
    if (e.target.value) {
      setDate(e.target.value);
    }
  };

  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserId(6);

    try {
      await axios.post("http://localhost:4000/api/Appointment", {
        AppointmentTime: selectedDate,
        Department: department,
        User: User,
        email:email,
        address:address,
        time:time
      });
      // dispatch(sendAppointmentEmail(email, name, date, time, department));
      const successMessage = document.createElement("div");
      successMessage.textContent = "Your booking has been successful!";
      successMessage.style.backgroundColor = "green";
      successMessage.style.color = "white";
      successMessage.style.padding = "10px";
      successMessage.style.borderRadius = "5px";
      successMessage.style.position = "fixed";
      successMessage.style.top = "50%";
      successMessage.style.left = "50%";
      successMessage.style.transform = "translate(-50%, -50%)";
      successMessage.style.zIndex = "9999";
      document.body.appendChild(successMessage);
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 3000);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  let Department = [
    "Surgery",
    "Cardiology",
    "Dental Care",
    "Orthopedics",
    "Eye Care",
    "Diagnosis",
  ];

  return (
    <div style={{backgroundImage:"../../app/img/hospitalimg.png.png"}}>
      {/* <Navbar /> */}
      <Container>
        <Content >
          <h1 style={{
              fontWeight: "bold",
              
              color: "#007E85",
              padding: "0px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              fontSize: "30px",
            }}>Meet The Best Hospital</h1>
          <h4 style={{
              fontWeight: "bold",
              
              color: "#007E85",
              padding: "0px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              fontSize: "30px",
            }}>
              
              We know how large objects will act ,</h4>

          <h4 style={{
              fontWeight: "bold",
              
              color: "#007E85",
              padding: "0px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              fontSize: "30px",
            }}>but things on a small scale.</h4>
          <button
            className="btn 2  11"
            style={{
              fontWeight: "bold",
              backgroundColor: "#007E85",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              fontSize: "16px",
            }}
          >
            Get Quote
          </button>
          <button
            className="btn btn-primary"
            style={{
              fontWeight: "bold",
              // fontWeight: "bold",
              backgroundColor: "#007E85",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              fontSize:"16px",
            }}
          >
            Learn More
          </button>
        </Content>

        <Form1
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "350px",
            margin: "auto",
            marginLeft: "220px",
            height: "fit-content",
            marginTop: "8px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Book an Appointment
          </h1>
          <h2 style={{ fontSize: "16px", color: "#6c757d", marginTop: "20px" }}>
            Fill the Form Please.
          </h2>
          <Input
            type="text"
            placeholder="Name"
            style={{
              marginBottom: "10px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={name}
            onChange={handleNameChange}
          />
          <br />

          <Input
            type="email"
            placeholder="Email"
            style={{
              marginBottom: "10px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <Input
            type="text"
            placeholder="Address"
            style={{
              marginBottom: "10px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={address}
            onChange={handleAddressChange}
          />
          <br />
          <select
            style={{
              marginBottom: "10px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={department}
            onChange={handleDepartmentChange}
          >
            {Department.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
          <br />

          <Form.Item>
            <DatePicker
              format="MMMM Do YYYY"
              style={{
                width: "180px",
                padding: "5px",
                borderRadius: "11px",
                border: "1px solid #ccc",
              }}
              onChange={handleDateChange1}
            />
          </Form.Item>

          <input
            type="time"
            value={time}
            onChange={handleTime}
            style={{
              marginBottom: "10px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
          />
          <br />
          <Link
          href={"https://flouci.com/pay/WA__DFndRDe9dHaQzPfDVw"}
  onClick={()=>handleSubmit}
  type="submit"
 
><button   style={{ backgroundColor: "#007E85", width: "80px", height:"30px" ,color:"white"}}
>
  Submit</button>
</Link>
        </Form1>
      </Container>

    </div>
  );
};

export default BookApp;