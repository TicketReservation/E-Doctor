"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/page';
import Footer from '../footer/footer';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { Speciality } from "../types/types";

import {useAppDispatch ,  useAppSelector} from '../lib/hooks';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    color: #007E85;
`;

const StatisticContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const StatisticCard = styled.div`
    background-color: #007d84;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
`;

const StatisticTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    color: #ffffff;
`;

const StatisticValue = styled.p`
    font-size: 16px;
    color: #f9f9f9;
`;

const TableContainer = styled.div`
    // width: 100%;
`;

const TableRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const TableCell = styled.div`
    font-size: 16px;
    margin-right: 10px;
    font-weight: bold;
    align-self: center;
`;

const ActionCell = styled(TableCell)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const SpacedTableRow = styled(TableRow)`
    margin-bottom: 59px; /* Adjust margin bottom to add space between rows */
`;
const BanButton = styled.button`
    background-color: #007d84;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
`;

const Admin = () => {
    const [users, setUsers] = useState([]);
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
  const speciality=useAppSelector(state=>state.speciality.speciality)


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
            <Container>
                <Title>Admin Dashboard</Title>
                <StatisticContainer>
                    <StatisticCard>
                        <StatisticTitle>Number of Users</StatisticTitle>
                        <StatisticValue>{usersCount}</StatisticValue>
                    </StatisticCard>
                    <StatisticCard>
                        <StatisticTitle>Number of Doctors</StatisticTitle>
                        <StatisticValue>{doctorsCount}</StatisticValue>
                    </StatisticCard>
                
                </StatisticContainer>
                <br /> <br /> <br /> <br />
                <div className='btttn'>
                    <button onClick={() => setDisplayType('users')} style={{ marginRight: '10px' }}> show  all patient</button>
                    <button onClick={() => setDisplayType('doctors')}>show all  Doctors</button>
                    <button onClick={() => setDisplayType('add')}>add new patient or doctor </button>
                    
                   
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
                /><br />
                <input 
                  type="text"
                  placeholder="First Name"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                /><br />
                <input 
                  type="text"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                /><br />
                <input 
                  type="text"
                  placeholder="Phone Number"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                /><br />
              </div>
              <div> 
                <input 
                  type="email"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                /><br />
              </div>
              <div>
                <input 
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
              <p>
               
                
               
              </p>
              <button type="submit">add </button>
            </form>
            )}


                <TableContainer>
                    <h3>{displayType === 'users' ? 'Users' : 'Doctors'}</h3>
                    {users.map((user, index) => (
                        (displayType === 'users' && user.UserType === 'patient') ||
                        (displayType === 'doctors' && user.UserType === 'doctor')) && (
                        <TableRow key={index}>
                            <Table striped >
                    <tbody>
                              <tr>
                               <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
                                <th>Email</th>&nbsp;&nbsp;&nbsp;&nbsp;
                                <th>UserType</th><br />
                                </tr>
                              
                            </tbody>
                            <tbody>
                              <tr>
                               <th>{user.FirstName}</th>&nbsp;&nbsp;&nbsp;&nbsp;
                                <th>{user.Email}</th>&nbsp;&nbsp;&nbsp;&nbsp;
                                <th>{user.UserType}</th>
                                <th><BanButton onClick={() => handleBanDoctor(user.Email)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></BanButton></th><br /><br />
                             
                              </tr>
                            </tbody>
                          </Table>
                        </TableRow>
                    ))}
                </TableContainer>
                
            </Container>
            <br /> <br /> <br /> <br />
            <Footer />
        </div>
    );
};

export default Admin;
