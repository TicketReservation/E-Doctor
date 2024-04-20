import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



export interface user{
email:string,
password:string
userType:string
}

const initialState={
    user:{},
    loading:false,
    error:""
}

interface state{
    user:user,
    loading:boolean,
    error:string
}

export const signInAsync=createAsyncThunk(
    "signIn/signInAsync",
    async (body,{rejectWithValue})=>{
        try {

            const response=await axios.post("http://localhost:4000/api/auth/login",body)

            return response.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const signInSlice=createSlice({
    name:"signIn",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signInAsync.pending,(state)=>{
            state.loading=true
        })
        .addCase(signInAsync.fulfilled,(state,action)=>{
            state.loading=false,
            state.user=action.payload
        })
        .addCase(signInAsync.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong happen"
        })
    }
})


export default signInSlice.reducer