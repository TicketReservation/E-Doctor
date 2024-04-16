import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export interface Rating{
    rating:number
    review:string
    imageSrc:string
    name:string
}
const initialState={
    doctor:{},
    loading:false,
    error:""
}
interface state{
    doctor:Rating|{},
    loading:boolean,
    error:string
}

export const ratings=createAsyncThunk(
    "rating/Ratings",
    async()=>{
        try {
            const response=await axios.get("/")
            return response.data
        } catch (error:any) {
            return error.message
        }
    }
)

export const ratingsSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(ratings.pending,(state)=>{
            state.loading=true
        })
        .addCase(ratings.fulfilled,(state,action)=>{
            state.loading=false
            state.doctor=action.payload
        })
        .addCase(ratings.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong"
        })
    }
})

export default ratingsSlice.reducer