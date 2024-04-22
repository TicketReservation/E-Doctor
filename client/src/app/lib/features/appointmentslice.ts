import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface Appointment {
  id: number;
  email: string;
  appointmentTime: Date;
  doctorId: number;
  status: string;
}

interface State {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

interface Body {
  email: string;
  appointmentTime: Date;
  doctorId: number;
}

export const appointmentAsync = createAsyncThunk<
  Appointment[],
  Body,
  { rejectValue: string }
>("appointment/appointmentAsync", async (body, { rejectWithValue }) => {
  try {
    const response = await axios.post<Appointment[]>("http://localhost:4000/api/Appointment/", body);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [],
    loading: false,
    error: null,
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(appointmentAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(appointmentAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appointmentSlice.reducer;