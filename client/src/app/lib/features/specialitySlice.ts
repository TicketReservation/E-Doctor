import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export interface Speciality{
    name:string
}
///api/doctors/speciality
const initialState={
    speciality:[],
    loading: false,
    error:""
}

interface state{
    speciality:Speciality|[],
    loading:boolean,
    error:""
}

export const specialityAsync=createAsyncThunk(
    "speciality/specialityAsync",
    async()=>{
        try {
            const response=await axios.get("http://localhost:4000/api/doctor/speciality")
            console.log('speciality',response.data);
            return response.data
            
        } catch (error:any) {
            console.log(error)
        }
    }
)

export const specialitySlice=createSlice({
    name:"speciality",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(specialityAsync.pending, (state) => {
            state.loading = true
         })
          .addCase(specialityAsync.fulfilled, (state, action) => {
          state.loading = false
          state.speciality=action.payload
          })
          .addCase(specialityAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "something wrong happen" 
          })      
      }
})

export default specialitySlice.reducer