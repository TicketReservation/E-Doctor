import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export interface Product {
    name:string
    price:number
    ImageUrl:string
    Category:string
}

const initialState={
    product:{},
    loading:false,
    error:""
}

interface state{
    email:Product|{},
    loading:boolean,
    error:string
}

export const products=createAsyncThunk(
    "product/products",
    async()=>{
        try {

            const response=await axios.get("http://localhost:4000/api/products/all")

            return response.data
        } catch (error:any) {
            return error.message
        }
    }
)

export const doctorSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(products.pending,(state)=>{
            state.loading=true
        })
        .addCase(products.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
        })
        .addCase(products.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message || "something wrong"
        })
    }
})

export default doctorSlice.reducer