"use client"
import React, { useState,useEffect } from 'react';
import styles from './appointment.module.css';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import ServicesPage from '../service/page';
import Doctorlist from '../doctorlist/page';
import axios from "axios"

const add = (body) => {
    axios.post("http://localhost:4000/api/appointment/", body)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
}
const availableAppointments = {
        Cardiology: [
          { time: new Date(2024, 12, 15, 10), isBooked: false },
          { time: new Date(2024, 12, 15, 11), isBooked: true },
          { time: new Date(2024, 12, 15, 12), isBooked: false },
          // ...
        ],
        Dermatology: [
          { time: new Date(2024, 12, 15, 10), isBooked: false },
          { time: new Date(2024, 12, 15, 11), isBooked: true },
          { time: new Date(2024, 12, 15, 12), isBooked: false },
          // ...
        ],
        Oncology: [
          { time: new Date(2024, 12, 15, 10), isBooked: true },
          { time: new Date(2024, 12, 15, 11), isBooked: false },
          { time: new Date(2024, 12, 15, 12), isBooked: true },
          // ...
        ],
        Gynecology: [
          { time: new Date(2024, 12, 15, 10), isBooked: false },
          { time: new Date(2024, 12, 15, 11), isBooked: false },
          { time: new Date(2024, 12, 15, 12), isBooked: true },
          // ...
        ],
        Pediatrics: [
          { time: new Date(2024, 12, 15, 10), isBooked: true },
          { time: new Date(2024, 12, 15, 11), isBooked: false },
          { time: new Date(2024, 12, 15, 12), isBooked: false },
          // ...
        ],
        Psychiatry: [
          { time: new Date(2024, 12, 15, 10), isBooked: false },
          { time: new Date(2024, 12, 15, 11), isBooked: true },
          { time: new Date(2024, 12, 15, 12), isBooked: false },
          // ...
        ],
      };
  // ...


interface BookAppointmentProps {
  initialName: string;
  initialEmail: string;
  AppointmentDepartment: string;
  AppointmentTime: Date;
}

const BookAppointment: React.FC<BookAppointmentProps> = ({
  initialName,
  initialEmail,
  AppointmentDepartment,
  AppointmentTime,
}) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [department, setDepartment] = useState<string | undefined>(AppointmentDepartment);
  const [time, setTime] = useState(AppointmentTime);

  const adddd =()=>{
    add({name:name,
      email:email,
      department:department,
      time:time
    })
}
    

  const handleSelect = (date: Date) => {
    if (department) {
      const availableTimes = availableAppointments[department].filter(
        (appointment) => !appointment.isBooked && appointment.time >= date
      );

      if (availableTimes.length > 0) {
        setTime(availableTimes[0].time);
      }
    }
  };

  return (
    <div>
      <form className={styles.bookAppointmentForm}>
        <div className={styles.bigformdeco}>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="name">
              Name*
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="email">
              Email address *
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="department">
              Departement *
            </label>
            <select
              className={styles.select}
              id="department"
              value={department || ""}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Oncology">Oncology</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Psychiatry">Psychiatry</option>
            </select>
          </div>

          <div className={styles.formField}><label className={styles.formLabel}>Time *</label>
          <Calendar
            onChange={(date: Date) => setTime(date)} // Update the time state when date is selected
            value={time}
          />
          </div>

          <button type="submit" onClick={()=>adddd()} className={styles.bookAppointmentButton}>
            Book Appointment
          </button>
        </div>
      </form>
      {/* <ServicesPage/>
      <Doctorlist/> */}

    </div>
  );
};

export default BookAppointment;

