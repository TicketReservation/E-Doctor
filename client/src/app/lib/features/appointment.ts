import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"
import {User,Doctor,AppointmentStatus,Appointment} from "../../types/types"





interface statetypes {
    appointment: Appointment[],
    loading: boolean,
    error: string,
}


const initialState:statetypes= {
    appointment: [],
    loading: false,
    error: "",
}

// export const fetchAppointment = createAsyncThunk(
    // "appointment/fetchAppointment",
    // async (body) => {
        // try {
            // const response = await axios.post(
                // "http://localhost:4000/api/Appointment",
                // body
    // 
            // )
            // return response.data
            // console.log(response.data)
        // } catch (error) {
            // console.log(error)
        // }
    // }
// ) 





export const fetchAppointments = createAsyncThunk(
    "appointments/fetchAppointments",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/Appointment"
        );
        return response.data as Appointment[];
      } catch (error) {
        // Throw the error to be caught by the rejected action handler
        throw error;
      }
    }
  );

// export const appointmentSclice=createSlice({
//     name:"Appointment",
//     initialState,
//     reducers:{},
//     extraReducers:(builder) => {
//         builder.addCase(fetchAppointment.fulfilled, (state, action) => {
//             state.appointment = action.payload as Appointment[];
//         });
//         builder.addCase(fetchAppointment.rejected, (state, action) => {
//             state.error = "error";
//             state.loading = false;
//         });
//         builder.addCase(fetchAppointment.pending, (state, action) => {
//             state.loading = true;
//         });
//     }
// })

const appointmentSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAppointments.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAppointments.fulfilled, (state, action) => {
          state.loading = false;
          state.appointment = action.payload;
        })
        .addCase(fetchAppointments.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? "An error occurred.";
        });
    },
  });
  

  export default appointmentSlice.reducer;