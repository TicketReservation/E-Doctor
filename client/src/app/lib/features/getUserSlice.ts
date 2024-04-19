import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { headers } from 'next/headers'
import { Token } from '../../types/types'



export interface User{
email:string,
password:string
UserType:string
}

const initialState={
    user:{},
    loading:false,
    error:""
}

interface state{
    user:User,
    loading:boolean,
    error:string
}

export const currentAsync=createAsyncThunk(
    "currentUser/user",
    async (token:Token)=>{
        try {

            const response=await axios.post("http://localhost:4000/api/auth/currentUser",{headers:{
                Authorization:`Bearer ${token.token}`
            }})

            return response.data
        } catch (error:any) {
        }
    }
)

export const currentSlice=createSlice({
    name:"current",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(currentAsync.pending,(state)=>{
            state.loading=true
        })
        .addCase(currentAsync.fulfilled,(state,action)=>{
            state.loading=false,
            state.user=action.payload
        })
        .addCase(currentAsync.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong happen"
        })
    }
})


export default currentSlice.reducer