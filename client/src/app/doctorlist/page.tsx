'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import styles from './doctorlist.module.css';

import imagedoc from "../img/doctorimage.jpg"

interface Doctor {
  id: number ;
  FirstName: string;
  LastName: string;
  Username: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  imageUrl: string;
  Speciality: string;
}

const Doctorlist: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchDoctors = () => {
    axios
      .get<Doctor[]>("http://localhost:4000/api/doctors/all")
      .then((response) => setDoctors(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <div>
        <h1>hellooo</h1>
      </div>
    <div style={{ backgroundColor: '#ECECEC', margin: 0, padding: 0 }}>
      <h1 style={{ color: '#007E85', textAlign: 'center' }}>DOCTORS</h1>
      <h3 style={{ color:'#5D5D5D', textAlign: 'center', fontSize: '15px',marginBottom:'4em'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center',alignItems: 'center', marginLeft:'170px'}}>
        {doctors.map((doctor, id) => (
          <Link href={`/doctorlist/${doctor.id}`} key={id} className={styles.linkonedoc}>
            <div style={{ width: '230px', height: 'auto', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '20px', fontFamily: 'Arial, sans-serif' }}>
              <Image src={imagedoc} alt="Service Image" width={230} height={170}  />
              <h2 style={{ color: '#007E85', fontSize: '20px', fontWeight: 'bold' }}>{doctor.FirstName} {doctor.LastName}</h2>
              <p style={{ color: '#5D5D5D', fontSize: '13px' }}>{doctor.Email}</p>
              <p style={{ color: '#5D5D5D', fontSize: '13px' }}>{doctor.PhoneNumber}</p>
              <a href="#" style={{ color: '#007E85', textDecoration: 'none' }}>Learn More &#10132;</a>
            </div>
          </Link>
        ))}
      </div>
    </div> </div>
  );
}

export default Doctorlist
  ;