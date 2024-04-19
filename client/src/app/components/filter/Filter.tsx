'use client'
import styles from "./filter.module.css";
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { specialityAsync } from "../../lib/features/specialitySlice" 
import { nameFilterAsync } from "../../lib/features/nameFilterSlice"
import { useEffect, useState } from "react";
import { Speciality,User } from "../../types/types";

const Filter = () => {
  const [view, setView] = useState("1stview");
  const [name, setName] = useState("");
  const [specId, setSpecId] = useState("");
  
  const switchView = (view: string) => {
    setView(view);
  };

  const dispatch = useAppDispatch();

  const nameFilter = useAppSelector(state => state.nameFilter.user);

  console.log("name", nameFilter);
  
  const specialities = useAppSelector(state => state.speciality.speciality);
  console.log("data", specialities);

  useEffect(() => {
    dispatch(specialityAsync());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(nameFilterAsync({ id: parseInt(specId), name: name }));
    switchView("2ndView");
  };

  return (
    <>
      <div className={styles.filter_container}>
        <h1>Find a doctor</h1>
        <div className={styles.filter_div}>
          <span className={styles.filter_alignSpan}>
            <input
              type="text"
              placeholder="Name"
              className={`${styles.filter_input} ${styles.filter_1stInput}`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <select
            defaultValue={0}
              name="Speciality"
              id="Speciality"
              className={styles.filter_dropdown}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSpecId(e.target.value)}
            >
              {specialities.map((speciality: Speciality, i: number) => (
                <option key={i} value={speciality.id}>{speciality.name}</option>
              ))}
                <option key="0" value={0}>Speciality</option>

            </select>
          </span>
          <span className={styles.filter_span}>
            <button className={styles.filter_search} onClick={handleSubmit}>Search</button>
          </span>
        </div>
      </div>
      {view === "2ndView" && (
  <div className={styles.filter_NameCard}>
    {
      nameFilter?.map((e:User,i:number)=>{
        return(
          <div className={styles.filter_NameCard}>
            <h1>Doctor name</h1>
            <p>{e.Username}</p>
            <h1>Doctor email</h1>
            <p>{e.Email}</p>
            <h1>Doctor number</h1>
            <p>{e.PhoneNumber}</p>
          </div>
        )
      }) || []
    }
  </div>
)}
    </>
  );
};

export default Filter;
