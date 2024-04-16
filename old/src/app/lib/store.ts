import { configureStore } from '@reduxjs/toolkit'
import signUpSlice from "./features/signUpSlice"
import signInSlice from './features/signInSlice'
import {getBlogsReducer, postBlogsReducer} from './features/blogSlice' 
import produtSlice from "./features/productSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        userSignUp:signUpSlice,
        userSignIn:signInSlice,
        getBlogs:getBlogsReducer,
        postBlogs:postBlogsReducer,
        products:produtSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']