import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

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
    <div className="divNavbar">
      <div className="logoContainer">
        <img
          className="logo"
          src="/path/to/your/logo.png"
          alt="Logo"
          onClick={() => {
            // Your logic for handling logo click
          }}
        />
        <Link href="/">
          <a>
            <h2>HEALTH CARE</h2>
          </a>
        </Link>
      </div>
      <div className="navLinks">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/service">
          <a>Service</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
        <Link href="/bloglist">
          <a>Blogs</a>
        </Link>
        <Link href="/Pharmacy">
          <a>Pharmacy</a>
        </Link>
        <Link href="/doctorlist">
          <a>Doctors</a>
        </Link>
        {isLogged ? (
          <div className="dropdown">
            <a className="Profile" onClick={toggleDropdown}>
              <Image
                className="profileIcon"
                src="/path/to/your/profile-icon.png"
                alt="Profile Icon"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            <Link href="/login">
              <button>Log In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
