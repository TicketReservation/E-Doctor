import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reviews from '../reviews/reviews';
import Popup from 'reactjs-popup'; 
import axios from 'axios';
import styles from "./userprofile.module.css";
import { useRouter } from 'next/navigation'; // Change from 'next/navigation' to 'next/router'
// import { Appointment } from '../types/types'; // Assuming Appointment type is defined in '../types/types'
// import Rating from './Rating'; // Assuming Rating component is imported from './Rating'

const UserProfilePage: React.FC = () => {
//   const [doctorData, setDoctorData] = useState([]); // Change the type to Appointment[]
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
//   const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
//   const [isReview, setIsReview] = useState<boolean>(false);

//   useEffect(() => {
//     const userString = localStorage.getItem('user');
//     if (userString) {
//       const user = JSON.parse(userString);
//       user.appointments = [
//         { name: "Alice Wonderland", date: "2024-04-15, 10:00 AM", description: "Routine check-up", rating: 4 },
//         { name: "Charlie Bucket", date: "2024-04-16, 11:00 AM", description: "Consultation", rating: 5 },
//       ];
//       setDoctorData([user]);
//     } else {
//       console.log('No user found in localStorage.');
//     }
//   }, [searchQuery, showPasswordModal, showProfileModal, isReview]);

//   const router = useRouter();
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleShowPasswordModal = () => setShowPasswordModal(true);
//   const handleClosePasswordModal = () => setShowPasswordModal(false);
//   const handleShowProfileModal = () => setShowProfileModal(true);
//   const handleCloseProfileModal = () => setShowProfileModal(false);
const [users, setIusers] = useState([]);
const [updater,setupdater] =useState(true)
const [FirstName,setFirstName]=useState("")
const [LastName,setLastName]=useState("")
const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")
const [PhoneNumber,setPhoneNumber]=useState("")
const [Username,setUsername]=useState("")
const [id,setId]=useState(6)


const fetchusers = () =>{
    axios.get("http://localhost:4000/api/users/all")
    .then((response)=>setIusers(response.data))
    .catch((err)=>console.log(err))
    }
    console.log(users);

    useEffect(()=>{
        fetchusers()
      },[])
      
      const update = (id: any,body: any) =>{
        axios.put(`http://localhost:4000/api/users/update/${id}`,body)
        .then((response)=>console.log(response.data))
        .catch((err)=>console.log(err))
        setupdater(!updater)
        }
        const upp =()=>{
            update(id,{FirstName:FirstName,
                LastName:LastName,
                Username:Username,
                Email:Email,
                Password:Password,
                PhoneNumber:PhoneNumber
            })
        }
  return (
   
    <div className={styles.doctorprofilecontainer}>
        <h1 className={styles.usertitle}>MY PROFILE</h1>
      {/* <Image src={profileImage} alt="Profile" className={styles.doctorprofilepicture} width={200} height={200} /> */}
      <div className={styles.doctorprofiledetails}>
        <div className={styles.doctorprofilename}>
          {/* <h2>{doctorData[0]?.name}</h2>
          <p>{doctorData[0]?.specialty}</p> */}
        </div>
        <div className={styles.doctorprofileactions}>
          
         
          <Popup trigger={ <button  className={styles.popuptriggerbutton}>Update Profile</button>} position="right center">
      <div className={styles.popupcontentupdate}>
        <div className={styles.popuptitle}>Update Profile</div><br></br>
        <input 
          type="text"
          className={styles.popupinput}
          onChange={(e)=>setFirstName(e.target.value)}
          placeholder="new firstname ..."
        />
        <br></br>
        <input
        onChange={(e)=>setLastName(e.target.value)}
          type="text"
          className={styles.popupinput}
          placeholder="new lastname ..."
        />
        <br></br>
        <input
        onChange={(e)=>setUsername(e.target.value)}
          type="text"
          className={styles.popupinput}
          placeholder="new username ..."
        />
        <br></br>
        
        <input
        onChange={(e)=>setEmail(e.target.value)}
          type="text"
          className={styles.popupinput}
          placeholder="new email ..."
        />
        <br></br>
        <input
        onChange={(e)=>setPhoneNumber(e.target.value)}
          type="text"
          className={styles.popupinput}
          placeholder="new phone number ..."
        />
        <br></br>
      
        <button onClick={()=>upp()} className={styles.popupsubmitbutton}>UPDATE</button>
      </div>
    </Popup>
          <Popup trigger={<button className={styles.popuptriggerbutton}>Change Password</button>} position="right center">
      <div className={styles.popupcontent}>
        <div className={styles.popuptitle}>Change Password</div><br></br>
        <input
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          onClick={()=>upp()}
          className={styles.popupinput}
          placeholder="Enter new password"
        /><br></br>
        <button  className={styles.popupsubmitbutton}>Submit</button>
      </div>
    </Popup>
    <Popup trigger={<button  className={styles.popuptriggerbutton}>Post Blog</button>} position="right center">
      <div className={styles.popupcontent}>
        <div className={styles.popuptitle}>Post Blog</div><br></br>
        <input
          type="text"
          
          
          className={styles.popupinput}
          placeholder="create blog ..."
        /><br></br>
        <button  className={styles.popupsubmitbutton}>Submit</button>
      </div>
    </Popup>
    
    

      </div><hr />
      
      
{users.map((user) => 
    <div key ={user.id}className={styles.userProfile}>
      <div className={styles.divcenter}><h2>firstname :</h2>  <h3>{user.FirstName}</h3></div> <hr />
      <div className={styles.divcenter}><h2>lastname :</h2>  <h3>{user.LastName}</h3></div><hr />
      <div className={styles.divcenter}><h2>username :</h2>  <h3>{user.Username}</h3></div><hr />
      <div className={styles.divcenter}><h2>email :</h2>  <h3>{user.Email}</h3></div><hr />
      <div className={styles.divcenter}><h2>phone number:</h2>  <h3>{user.PhoneNumber}</h3></div>
          </div>)}
      
          </div>
          
        
      
             </div>
          )}
    

export default UserProfilePage;
