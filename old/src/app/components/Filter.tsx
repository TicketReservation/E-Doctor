import React from 'react';
import styles from '../home/home.module.css';

const Filter = () => {
  return (
    <div >
      <h1>Find a doctor</h1> 
      <div className={styles.aligne}>
      <span>
      <input type="text" className={styles.input} placeholder='Name'/>  
      <input type="text" className={styles.input} placeholder='Speciality'/> 
      </span>
      <span>
      <span className={styles.filter}>
      <p className={styles.available}>Available</p>
      <label className={styles.switch}>
        <input type="checkbox"/>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      </span> 
      </span>
      <button className={styles.searchBtn}>Search</button>
      </div>
    </div>
  );
};

export default Filter;
