import React from 'react';
import styles from "./filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter_container}>
          <h1>Find a doctor</h1>
      <div className={styles.filter_div}>
        <span>
        <input type="text" placeholder="Name" className={styles.filter_input} />
        <input type="text" placeholder="Speciality" className={styles.filter_input} />
        </span>
        <span className={styles.filter_span}>
        <p className={styles.filter_available}>Available</p>
        <label className={styles.filter_Switch}>
          <input className={styles.filter_checked} type="checkbox"  />
          <span className={`${styles.filter_slider} ${styles.filter_round}`}></span>
        </label>
          <button className={styles.filter_search}>Search</button>
        </span>
      </div>
    </div>
  );
};

export default Filter;
