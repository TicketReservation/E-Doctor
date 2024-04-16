import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export interface Email{
    email:string,
    name:string,
    date:string,
    time:string,
    department:string
}
const initialState={
    email:{},
    loading:false,
    error:""
}

interface state{
    email:Email|{},
    loading:boolean,
    error:string
}

export const emails=createAsyncThunk(
    "email/emails",
    async(body,{rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:4000/api/",body)
            return response.data
          } catch (error: any) {
            return rejectWithValue(error.response.data)
          }
    }
)

export const emailSlice=createSlice({
    name:"email",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(emails.pending,(state)=>{
            state.loading=true
        })
        .addCase(emails.fulfilled,(state,action)=>{
            state.loading=false
            state.email=action.payload
        })
        .addCase(emails.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong"
        })
    }
})