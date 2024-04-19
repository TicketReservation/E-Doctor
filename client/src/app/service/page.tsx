import React from 'react';
import Image, { StaticImageData } from 'next/image';
import dental from "../img/dental.png";
import cardiology from "../img/cardiology.png";
import eyecare from "../img/eyecare.png";
import diagnosis from "../img/diagnosis.png";
import surgery from "../img/surgery.png";
import bones from "../img/bones.png";


const data = [
  {
    name: "Dental Care",
    description: "Oral health services and treatments for teeth",
    photo: dental
  },
  {
    name: "Orthopedics",
    description: "Specialized care for musculoskeletal system and bones",
    photo: bones
  },
  {
    name: "Eye Care",
    description: "Vision-related services and treatments for eyes",
    photo: eyecare
  },
  {
    name: "Surgery",
    description: "Medical procedures for various conditions and ailments",
    photo: surgery
  },
  {
    name: "Cardiology",
    description: "Heart-related medical services and treatments",
    photo: cardiology
  },
  {
    name: "Diagnosis",
    description: "Identifying medical conditions through tests and examinations",
    photo: diagnosis
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#ECECEC', margin: 0, padding: 0 }}>
      <h1 style={{ color: '#007E85', textAlign: 'center' }}>Services We Provide</h1>
      <h3 style={{ color:'#5D5D5D', textAlign: 'center', fontSize: '15px',marginBottom:'4em'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center',alignItems: 'center', marginLeft:'170px'}}>
        {data.map((item, index: number) => (
          <div key={index} style={{ width: '230px', height: 'auto', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Image src={item.photo} alt="Service Image" width={230} height={170}  />

            <h2 style={{ color: '#007E85', fontSize: '20px', fontWeight: 'bold' }}>{item.name}</h2>
            <p style={{ color: '#5D5D5D', fontSize: '13px' }}>{item.description}</p>
            <a href="#" style={{ color: '#007E85', textDecoration: 'none' }}>Learn More &#10132;</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
