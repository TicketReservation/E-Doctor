"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/page';
// import Footer from '../footer/footer';
import { Speciality } from "../types/types";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useAppDispatch ,  useAppSelector } from '../lib/hooks';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Admin = () => {
    const [users, setUsers] = useState<Array<any>>([]);
    const [displayType, setDisplayType] = useState('users');
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [UserType, setUsertype] = useState("");
    const [error, setError] = useState("");
    const [specialityId, setSpecialityId] = useState("");
  
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const speciality = useAppSelector(state => state.speciality.speciality);

    console.log("speciality",speciality);

    useEffect(() => {
        fetchData();
    }, []);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
          const body = {
            UserType: UserType,
            Username: Username,
            Email: Email,
            Password: Password,
            FirstName: FirstName,
            LastName: LastName,
            PhoneNumber: PhoneNumber,
            imageUrl: image,
            specialityId: specialityId,
          };
          const response = await axios.post(
            "http://localhost:4000/api/auth/register",
            body
          );
          console.log(response.data);
          setError("");
        //   window.location.href = "/";
        } catch (err) {
          console.log(err);
          setError(err.response.data.error);
          console.log(err.response.data.error);
        }
      };
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users/all');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleBanDoctor = (email) => {
        axios.delete(`http://localhost:4000/api/users/delete/${email}`)
            .then((response) => {
                console.log(`Deleted user with email: ${email}`);
                // After deletion, fetch data again to update the table
                fetchData();
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };
    
    const usersCount = users.filter(user => user.UserType === 'patient').length;
    const doctorsCount = users.filter(user => user.UserType === 'doctor').length;
    
    return (
        <div>
            <Navbar />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                <h1 style={{fontSize: '24px', marginBottom: '20px', color: '#007E85'}}>Admin Dashboard</h1>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div style={{backgroundColor: '#007d84', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', flex: '1', marginRight: '20px'}}>
                        <h3 style={{fontSize: '18px', marginBottom: '10px', color: '#ffffff'}}>Number of Users</h3>
                        <p style={{fontSize: '16px', color: '#f9f9f9'}}>{usersCount}</p>
                    </div>
                    <div style={{backgroundColor: '#007d84', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px', flex: '1', marginRight: '20px'}}>
                        <h3 style={{fontSize: '18px', marginBottom: '10px', color: '#ffffff'}}>Number of Doctors</h3>
                        <p style={{fontSize: '16px', color: '#f9f9f9'}}>{doctorsCount}</p>
                    </div>
                </div>
                <br /> <br /> <br /> <br />
                <div className='btttn'>
                    <button onClick={() => setDisplayType('users')} style={{ marginRight: '10px' }}>Show All Patients</button>
                    <button onClick={() => setDisplayType('doctors')}>Show All Doctors</button>
                    <button onClick={() => setDisplayType('add')}>Add New Patient or Doctor</button>
                </div>
               
                {displayType === 'add' && (
                    <form onSubmit={HandleSubmit}>
                        <div>
                            <div className="doctor-image">
                                <img
                                    src="https://th.bing.com/th/id/OIP.czYUxy7G0x5DDRsqs9xq0QHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                    alt="Doctor"
                                    style={{marginBottom:'20px' , borderRadius:'20%',marginLeft:'50px',marginTop:'20px',background:'transparent'}}
                                />
                            </div><br />
                            <div>
                                <input 
                                    type="text"
                                    placeholder="Username"
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    style={{marginBottom: '10px'}}
                                /><br />
                                <input 
                                    type="text"
                                    placeholder="First Name"
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    style={{marginBottom: '10px'}}
                                /><br />
                                <input 
                                    type="text"
                                    placeholder="Last Name"
                                    value={LastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    style={{marginBottom: '10px'}}
                                /><br />
                                <input 
                                    type="text"
                                    placeholder="Phone Number"
                                    value={PhoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    style={{marginBottom: '10px'}}
                                /><br />
                            </div>
                            <div> 
                                <input 
                                    type="email"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{marginBottom: '10px'}}
                                /><br />
                            </div>
                            <div>
                                <input 
                                    type="password"
                                    placeholder="Password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{marginBottom: '10px'}}
                                />
                                <div>
                                {UserType === "doctor" && (
                    
                    <select    onChange={(e) => {
                      console.log(e.target.value);
                      setSpecialityId(e.target.value);
                     
                    }}
                     name="Speciality" id="Speciality" >
                    {speciality.map((e:Speciality,i:number)=>{
                      return <option value={e.id}  key={i}>
                        {e.name}
                        </option>
                    })}
                    </select>
                  )}
                 <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsertype(e.target.value);
                }}
                required
                style={{
                  marginBottom: "10px",
                  marginLeft: "20px",
                  width: "180px",
                  padding: "5px",
                  borderRadius: "11px",
                  border: "1px solid #ccc",
                }}
              >
                    <option value="doctor">Doctor</option>
                    <option value="Patient">Patient</option>
                  </select>
                                </div>
                            </div>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <p></p>
                        <button type="submit">Add</button>
                    </form>
                )}

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">UserType</StyledTableCell>
                                <StyledTableCell align="right">Option</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <h3>{displayType === 'users' ? 'Users' : 'Doctors'}</h3>
                            {users.map((user, index) => (
                               (displayType === 'users' && user.UserType === 'patient') ||
                               (displayType === 'doctors' && user.UserType === 'doctor')) && (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">
                                        {user.Username}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{user.Email}</StyledTableCell>
                                    <StyledTableCell align="right">{user.UserType}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <button onClick={() => handleBanDoctor(user.Email)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                            </svg>
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br /> <br /> <br /> <br />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Admin;
