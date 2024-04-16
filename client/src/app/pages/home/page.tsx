"use client"
import React  ,{useState} from 'react'
import Link from 'next/link'
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
import styled from 'styled-components'
// import { useRouter } from 'next/navigation'
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #f5f5f5;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

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
export default function page() {

    const users = [
        { name: "Mohamed", email: "Mohamed@example.com" },
        { name: "Mahdi", email: "mahdi@example.com" },
        { name: "badis", email: "badis@example.com" },
        { name: "dhia", email: "dhia@example.com" },
        { name: "rami", email: "rami@example.com" },
        { name: "User 5", email: "user5@example.com" },
        { name: "User 6", email: "user5@example.com" },
        { name: "User 7", email: "user5@example.com" },
        { name: "User 8", email: "user5@example.com" },
        { name: "User 9", email: "user5@example.com" },
        { name: "User 10", email: "user5@example.com" },
    ];
    const paymentChartData = [
        { name: "Mohamed", amount: 100 },
        { name: "Mahdi", amount: 200 },
        { name: "badis", amount: 150 },
        { name: "dhia", amount: 300 },
        { name: "rami", amount: 250 },
    ];
    
    const doctors = [
        {
            name: "Doctor 1",
            specialization: "Cardiology",
            email: "doctor1@example.com",
        },
        {
            name: "Doctor 2",
            specialization: "Dermatology",
            email: "doctor2@example.com",
        },
        {
            name: "Doctor 3",
            specialization: "Orthopedics",
            email: "doctor3@example.com",
        },
        {
            name: "Doctor 4",
            specialization: "Pediatrics",
            email: "doctor4@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
        {
            name: "Doctor 5",
            specialization: "Neurology",
            email: "doctor5@example.com",
        },
    ];
    
        const [Users, setUsers] = useState(users);
        const [Doctors,setDoctors] = useState(doctors);
    
    const chartData = [
        { name: "Mohamed", age: 25, count: 10 },
        { name: "Mahdi", age: 30, count: 15 },
        { name: "badis", age: 35, count: 20 },
        { name: "dhia", age: 40, count: 12 },
        { name: "rami", age: 45, count: 18 },
        { name: "User 6", age: 50, count: 8 },
        { name: "User 7", age: 55, count: 14 },
    ];
    
    const lineChartData = [
        { name: "Mohamed", score: 80 },
        { name: "Mahdi", score: 90 },
        { name: "badis", score: 70 },
        { name: "dhia", score: 85 },
        { name: "rami", score: 95 },
        { name: "User 6", score: 75 },
    ]
// const router = useRouter()

return (
    <div>
        
        <Container>
            <Title >Admin Dashboard</Title>

            <SubTitle> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </SubTitle>
            <br />
            <br />

            <TableContainer>
                <DoctorTable>
                    <h3 >Users</h3>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <ActionCell>Action</ActionCell>
                    </TableRow>
                    {users.map((user, index) => (
                        <DoctorTableRow key={index}>
                            <DoctorTableCell>{user.name}</DoctorTableCell>
                            <DoctorTableCell>{user.email}</DoctorTableCell>
                            <ActionCell>
                                {/* <BanButton onClick={() => (user.email)}>Ban</BanButton> */}
                            </ActionCell>
                        </DoctorTableRow>
                    ))}
                </DoctorTable>

                <DoctorTable>
                    <h3 style={{ color: '#007E85' }}>Doctors</h3>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Specialization</TableCell>
                        <TableCell>Email</TableCell>
                        <ActionCell>Action</ActionCell>
                    </TableRow>
                    {doctors.map((doctor, index) => (
                        <DoctorTableRow key={index}>
                            <DoctorTableCell>{doctor.name}</DoctorTableCell>
                            <DoctorTableCell>{doctor.specialization}</DoctorTableCell>
                            <DoctorTableCell>{doctor.email}</DoctorTableCell>
                            <ActionCell>
                                {/* <BanButton onClick={() => handleBanDoctor(doctor.email)}>Ban</BanButton> */}
                            </ActionCell>
                        </DoctorTableRow>
                    ))}
                </DoctorTable>
            </TableContainer>
            <br />
            <br />

            <div>
                <h2 style={{ color: '#007E85' }}>Charts</h2>
                <br />
                <br />
                <ChartContainer>
                 

                    <BarChart width={400} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#007E85" />{" "}
                        {/* Change fill color here */}
                    </BarChart>

                    <LineChart width={400} height={300} data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `${Math.round(value)}%`} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke="black" />{" "}
                        {/* Change stroke color here */}
                    </LineChart>
                <div>
       
       
                {/* ... */}
                <BarChart width={400} height={300} data={paymentChartData} style={{marginTop:'-0px'}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#FFC107" />{" "}
                    {/* Change fill color here */}
                </BarChart>
     
        </div>
                </ChartContainer>
            </div>
        </Container>
        <br />
        <br />
       
    </div>
);
//   return (
//     <div>
//     <h1>back to home</h1>
// <Link href="/">go back</Link>

// {/* <button onClick={()=>{
//     router.push('/', { scroll: false })
// }}>here</button> */}
//     </div>
//   )
}
