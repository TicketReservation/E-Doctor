'use client'
import styles from "./filter.module.css";
import {useAppDispatch,useAppSelector} from "../../lib/hooks"
import {specialityAsync} from "../../lib/features/specialitySlice" 
import {nameFilterAsync} from "../../lib/features/nameFilterSlice"
import { useEffect, useState } from "react";
import { Speciality,User} from "../../types/types";

const Filter = () => {

  const [name,setName]=useState("")

  const dispatch=useAppDispatch()

  const nameFilter=useAppSelector(state=>state.nameFilter.user)
  console.log("name",nameFilter);
  
  const speciality=useAppSelector(state=>state.speciality.speciality)
  console.log("data",speciality);
  

  useEffect(()=>{
    dispatch(specialityAsync())
    
  },[dispatch])
  


  const hundelSubmit=()=>{
    dispatch(nameFilterAsync(name))
  }
  return (
    <div className={styles.filter_container}>
          <h1>Find a doctor</h1>
      <div className={styles.filter_div}>
        <span className={styles.filter_alignSpan}>
        <input type="text" placeholder="Name" className={`${styles.filter_input} ${styles.filter_1stInput}`} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
        <select name="Speciality" id="Speciality" className={styles.filter_dropdown}>
        <option value="speciality">Speciality</option>
        {speciality.map((e:Speciality,i:number)=>{
          return <option key={i}>
          {e.name}
                 </option>
        })}
        </select>
        </span>
        <span className={styles.filter_span}>
          <button className={styles.filter_search} onClick={hundelSubmit}>Search</button>
        </span>
      </div>
      
    </div>
  );
};

export default Filter;
