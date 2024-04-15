import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



export interface Doctor{
    FirstName:string
    LastName:string
    Username:string
    Email:string
    Password:string
    PhoneNumber:number
    ImageUrl:string
    Speciality:string
}

const initialState={
    doctor:{},
    loading:false,
    error:""
}

interface state{
    doctor:Doctor|{},
    loading:boolean,
    error:string
}

export const getdoctors=createAsyncThunk(
    "doctor/getdoctors",
    async()=>{
        try {
            const response=await axios.get("/")
            return response.data
        } catch (error:any) {
            return error.message
        }
    }
)
export const doctorSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getdoctors.pending,(state)=>{
            state.loading=true
        })
        .addCase(getdoctors.fulfilled,(state,action)=>{
            state.loading=false
            state.doctor=action.payload
        })
        .addCase(getdoctors.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong"
        })
    }
})
export default doctorSlice.reducer