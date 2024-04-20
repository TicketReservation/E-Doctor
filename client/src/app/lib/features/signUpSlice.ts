import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export interface user {
  userName: string
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: number
  imageUrl: string
  speciality: string
}

const initialState = {
user:{},
loading: false,
error:""
}

interface state {
user:user| {},
loading: boolean
error:""
}

export const signUpAsync = createAsyncThunk(
  "signUp/signUpAsync",
  async (body, { rejectWithValue }) => {
    try {

      const response = await axios.post("ttp://localhost:4000/api/auth/register",body)

      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.loading = true
     })
      .addCase(signUpAsync.fulfilled, (state, action) => {
      state.loading = false
      state.user=action.payload
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something wrong happen" 
      })      
  },
})

export default signUpSlice.reducer