"use client"
import React,{useState,useEffect} from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import axios from 'axios'

const Post = ({params}) => {
  console.log(params.id)
  const [doctors, setDoctors] = useState<[]>([]);

  const fetchDoctors = () => {
    axios
      .get<[]>("http://localhost:4000/api/doctors/all")
      .then((response) => setDoctors(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>In Greek mythology, the Amazons</h1>
          <p className={styles.desc}>Courageous and fiercely independent, the Amazons, commonly...</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src="https://images.pexels.com/photos/7582648/pexels-photo-7582648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="post image"
            fill={true}
          />
         
        </div>
      </header>
    </div>
  )
}

export default Post