import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css"
import { useRouter } from 'next/navigation'
import logophoto from "../img/logo.jpg"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter()

  // useEffect(() => {
  //   // Your logic for checking login status and user type
  // }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Your logout logic
    setIsLogged(false);
    router.push("/login");
  };

  return (
    <div className={styles.divNavbar}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={logophoto}
          alt="Logo"
          onClick={() => {
            // Your logic for handling logo click
          }}
        />
        
          
            <h2 className={styles.pagename} >HEALTH CARE</h2>
          
        
      </div>
      <div className={styles.navLinks}>
        <Link href="/">
          HOME
        </Link>
        <Link href="/contact">
          Contact Us
        </Link>
        <Link href="/service">
          Service
        </Link>

        
        <Link href="/Pharmacy">
          Pharmacy
        </Link>
        <Link href="/doctorlist">
          Doctors
        </Link>
        {isLogged ? (
          <div className={styles.dropdown}>
            <p className="Profile" onClick={toggleDropdown}></p>
              <Image
                className="profileIcon"
                src="/path/to/your/profile-icon.png"
                alt="Profile Icon"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            
            {isDropdownOpen && (
              <div className={styles.dropdowncontent}>
                <p onClick={handleLogout}>Logout </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/sign">
            <button className={styles.Log}>Sign UP</button>
            </Link>
            <Link href="/login">
              <button className={styles.Log}>Log In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
