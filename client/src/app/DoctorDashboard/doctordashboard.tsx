"use client"
import Link from 'next/link'
import Image from 'next/image'
import styles from './doctordashboard.module.css'
import imgdr from '../img/49b174422a00e03654190f9be2651ed6.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import 'semantic-ui-css/semantic.min.css'
import { FaSearch } from 'react-icons/fa'

const doctordashboard = () => {
  return (
    <div className= {styles.doctordashboard_conainer} >
        <div className= {styles.rectangle_container}>
          {/* <input className={styles.dashborddrsearch} placeholder="Search"></input> */}
          <div className={styles.searchContainer}>
      <input className={styles.dashborddrsearch} type="text" placeholder="Search" />
      <FaSearch className={styles.searchIcon} />
    </div>
      <h1 className={styles.drsalutation}>Good Morning <span className={styles.drname}></span> !</h1>
      
      <div className={styles.drstat}>
    <h3>Visits for today {}</h3>
    <div className={styles.statdoctor}>
        <div className={styles.newpatient}>

        </div>
        <div className={styles.oldpatient}>

        </div>
    </div>
    <div className={styles.drpicstat}>
        <div className={styles.doc}>
            <Image src={imgdr} alt="doctor" />
        </div>
        <Calendar className={styles.calendardr} />
    </div>
</div>
<div className={styles.doctorrendez}>
{/* contact work here   */}
  
  
  
  
   </div>






     
       </div>
    </div>
  )
}
export default doctordashboard