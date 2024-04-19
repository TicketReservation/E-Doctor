"use client"
import React,{useEffect, useState} from "react";
import axios from "axios";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
} from "recharts";
import styled from "styled-components";
import Navbar from "../navbar/page";
import Footer from "../footer/footer";

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

const SubTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    color: #555;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Table = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const TableRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const TableCell = styled.div`
    font-size: 16px;
    margin-right: 10px;
    font-weight: bold;
    align-self: center;
`;

const DoctorTable = styled(Table)`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DoctorTableRow = styled(TableRow)`
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 8px;
`;

const DoctorTableCell = styled(TableCell)`
    font-weight: bold;
`;

const ActionCell = styled(TableCell)`
    display: flex;
    align-items: center;
    justify-content: flex-end; // Updated CSS property
`;

const BanButton = styled.button`
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    float: right; // Add this line
    display: flex;
    align-items: center;
    justify-content: flex-end; // Updated CSS property
`;

const ChartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    
    > div {
        margin-right: 25px; // Add this line
    }
`;

const Admin = () => {
    
    
        const [users, setUsers] = useState('');
     
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/users/all');
                setUsers(response.data);
              
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    
    const handleBanUser = (email) => {
        axios.delete('http://localhost:4000/api/users/delete', 
              email
             ).then((response) => {

            console.log(`Banning user with email: ${email}`);
        })
    };

    const handleBanDoctor = (email) => {
        axios.delete('http://localhost:4000/api/users/delete',   email 

        ).then((response) => {
        console.log(`Banning doctor with email: ${email}`);
    })
    };

    return (
        <div>
            <Navbar />
            <Container>
                <Title style={{ color: '#007E85' }}>Admin Dashboard</Title>

                
                <br />
                <br />

                <TableContainer>
                    <DoctorTable>
                        <h3 style={{ color: '#007E85' }}>Users</h3>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <ActionCell>Action</ActionCell>
                        </TableRow>
                        {users&&users
                        .filter(e=>(
                            e.UserType==="patient"
                        ))
                        .map((e, index) => {
                            return(
                            <DoctorTableRow key={index}>
                                <DoctorTableCell>{e.FirstName}</DoctorTableCell>
                                <DoctorTableCell>{e.Email}</DoctorTableCell>
                                <ActionCell>
                                    <BanButton onClick={() => handleBanUser(e.email)}>delete</BanButton>
                                </ActionCell>
                            </DoctorTableRow>
                        )})}
                    </DoctorTable>

                    <DoctorTable>
                        <h3 style={{ color: '#007E85' }}>Doctors</h3>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Specialization</TableCell>
                            <TableCell>Email</TableCell>
                            <ActionCell>Action</ActionCell>
                        </TableRow>
                        {users&&users
                        .filter(e=>(
                            e.UserType==="doctor"
                        ))
                        .map((e, index) => {
                            return(
                            <DoctorTableRow key={index}>
                                <DoctorTableCell>{e.FirstName}</DoctorTableCell>
                                <DoctorTableCell>{e.Email}</DoctorTableCell>
                                <DoctorTableCell>{e.specialityId}</DoctorTableCell>

                                <ActionCell>
                                    <BanButton onClick={() => handleBanUser(e.email)}>delete</BanButton>
                                </ActionCell>
                            </DoctorTableRow>
                        )})}
                    </DoctorTable>
                </TableContainer>
                <br />
                <br />

               
            </Container>
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default Admin;
