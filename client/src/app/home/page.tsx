"use client"
import react,{useEffect} from "react";
import Image from "next/image"
import image from "./img1.png"
import Filter from "../components/filter/Filter"
import styles from "./home.module.css"
import { useAppDispatch } from "../lib/hooks";
import { Token } from '../types/types';

import { currentAsync } from "../lib/features/getUserSlice"
const Home = () => {
  const dispatch=useAppDispatch()
  useEffect(() =>{
    const token=localStorage.getItem("token")|| ""
    dispatch(currentAsync({token}));
  },[])
  return (
    <div className={styles.home_container}>
    <div>
      <div className={styles.home_centence} style={{"float":"left"}}>
      <h1>Providing Quality <span className={styles.home_healthcare}>Healthcare</span> For A</h1>
      <h1><span className={styles.home_brigther}>Brigther</span> and <span className={styles.home_brigther}>Healthy </span> Future </h1>
      <p className={styles.home_subCentence}>At our hospital, we are dedicated to providing exceptional <br /> 
      medical care to our patients and their families. <br /> 
      Our experienced team of medical professionals, cutting-edge <br /> 
      technology, and compassionate approach make us a leader <br /> 
      in the healthcare industry</p>
      <span className={styles.home_buTons}>
      <button className={styles.home_apointBtn}>appointments</button>
      <div className={styles.home_vidPlayer}><div className={styles.home_tri}></div></div><p className={styles.home_watchVid}>Watch video</p>
      </span>
      </div>
    <Image
    style={{"float":"right"}}
      className={styles.home_immg}
      src={image}
      alt=""
      />
    </div>
    <Filter/>
    </div>
  )
}

export default Home
