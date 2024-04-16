import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"
export interface Blog{
    title:string,
    Text:string,
    imageUrl:string
}


const initialState={
    blog:{},
    loading:false,
    error:""
}

interface state{
    blog:Blog|{},
    loading:boolean,
    error:string
}
export const postBlogs=createAsyncThunk(
    "blog/postBlogs",
    async(body,{rejectWithValue})=>{
        try {
            const response = await axios.post("/",body)
            return response.data
          } catch (error: any) {
            return rejectWithValue(error.response.data)
          }
    }
)
export const getBlogs=createAsyncThunk(
    "blog/getBlogs",
    async()=>{
        try {
            const response=await axios.get("/")
            return response.data
        } catch (error:any) {
            return error.message
        }
    }
)
export const postBlogsSlice=createSlice({
    name:"postBlogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogs.pending,(state)=>{
            state.loading=true
        })
        .addCase(getBlogs.fulfilled,(state,action)=>{
            state.loading=false
            state.blog=action.payload
        })
        .addCase(getBlogs.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong"
        })
    }
})
export const getBlogsSlice=createSlice({
    name:"getBlogs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getBlogs.pending,(state)=>{
            state.loading=true
        })
        .addCase(getBlogs.fulfilled,(state,action)=>{
            state.loading=false,
            state.blog=action.payload
        })
        .addCase(getBlogs.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.error.message || "something wrong"
        })
    }
})

export const getBlogsReducer = getBlogsSlice.reducer;
export const postBlogsReducer = postBlogsSlice.reducer;
