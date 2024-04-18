import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"
interface Appointment {
    id: number;
    appointmentTime: Date;
    status: AppointmentStatus;
  
    appointmentDepartment: string;
  
    patient: User;
  
    doctor: Doctor;
  
  
    enum AppointmentStatus: {
        Pending,
        Confirmed,
        Cancelled
    }
}


const initialState = {
    appointment: [],
    loading: false,
    error: "",
}

export const fetchAppointment = createAsyncThunk(
    "appointment/fetchAppointment",
    async (body) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/api/Appointment",
                body
    
            )
            // return response.data
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
) 

export const appointmentSclice=createSlice({
    name:"Appointment",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchAppointment.fulfilled, (state, action) => {
            state.appointment = action.payload as Appointment[];
        });
        builder.addCase(fetchAppointment.rejected, (state, action) => {
            state.error = "error";
            state.loading = false;
        });
        builder.addCase(fetchAppointment.pending, (state, action) => {
            state.loading = true;
        });
    }
})

export default appointmentSclice.reducer;