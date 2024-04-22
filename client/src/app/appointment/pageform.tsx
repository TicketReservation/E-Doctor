import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";
import { useDispatch } from "react-redux";
// import { sendAppointmentEmail } from "./redux/actions/emailActions";
import { useRouter } from 'next/router'
import { DatePicker } from "antd";
// import FaqPage from "./FaqPage";
import { json } from "react-router-dom";

interface State {
  date: string;
  name: string;
  email: string;
  address: string;
  department: string;
  time: string;
  userId: string;
}

interface Props {
  doctor: {
    id: string;
    Speciality: string;
  };
}

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

const Form = styled.form`
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
  background-color: #007e85;
  color: white;
  padding: 10px 20px; /* Increase padding to make the button bigger */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto; /* Center the button horizontally */
  display: block; /* Ensure the button takes up the full width */
`;

const AppointmentPage: React.FC<Props> = ({ doctor }) => {
  const [state, setState] = useState<State>({
    date: "",
    name: "",
    email: "",
    address: "",
    department: "",
    time: "",
    userId: "",
  });

  const dispatch = useDispatch();
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/sendEmail", { ...state });
    //   dispatch(sendAppointmentEmail());
    router.push("/faq");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content>
        <h1>Appointment Page</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="date">
            <Input
              type="date"
              id="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            <Input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </label>
          <label htmlFor="email">
            <Input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>
          <label htmlFor="address">
            <Input
              type="text"
              id="address"
              name="address"
              value={state.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </label>
          <label htmlFor="department">
            <Input
              type="text"
              id="department"
              name="department"
              value={state.department}
              onChange={handleChange}
              placeholder="Department"
            />
          </label>
          <label htmlFor="time">
            <Input
              type="time"
              id="time"
              name="time"
              value={state.time}
              onChange={handleChange}
            />
          </label>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default AppointmentPage;