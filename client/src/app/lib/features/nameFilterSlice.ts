import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import {User} from "../../types/types"

const initialState:state={
    user:[],
    loading: false,
    error:""
}

interface state{
    user:User[] 
    loading:boolean
    error:string
}

export const nameFilterAsync=createAsyncThunk(
    "nameFilter/nameFilterAsync",
    async({id,name}:{id:number,name:string})=>{
        try {
            const response=await axios.get(`http://localhost:4000/api/auth/${id}/${name}`)
            return response.data
        } catch (error:any) {
            console.log(error)
        }
    }
)


export const nameFilterSlice=createSlice({
    name:"name",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(nameFilterAsync.pending, (state) => {
            state.loading = true
         })
          .addCase(nameFilterAsync.fulfilled, (state, action) => {
          state.loading = false
          state.user=action.payload
          })
          .addCase(nameFilterAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "something wrong happen" 
          })      
      }
})

export default nameFilterSlice.reducer