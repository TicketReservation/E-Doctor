import Image from "next/image"
import image from "./img1.png"
// import Filter from "../components/Filter"
import styles from "./home.module.css"
const Home = () => {
  return (
    <>
    <div>
      <div className={styles.centence} style={{"float":"left"}}>
      <h1>Providing Quality <span className={styles.healthcare}>Healthcare</span> For A</h1>
      <h1><span className={styles.brigther}>Brigther</span> and <span className={styles.brigther}>Healthy </span> Future </h1>
      <p className={styles.subCentence}>At our hospital, we are dedicated to providing exceptional <br /> 
      medical care to our patients and their families. <br /> 
      Our experienced team of medical professionals, cutting-edge <br /> 
      technology, and compassionate approach make us a leader <br /> 
      in the healthcare industry</p>
      <span className={styles.buTons}>
      <button className={styles.apointBtn}>appointments</button>
      <div className={styles.vidPlayer}><div className={styles.tri}></div></div><p className={styles.watchVid}>Watch video</p>
      </span>
      </div>
    <Image
    style={{"float":"right"}}
      className={styles.immg}
      src={image}
      alt=""
      />
    </div>
    {/* <Filter/> */}
    </>
  )
}

export default Home
