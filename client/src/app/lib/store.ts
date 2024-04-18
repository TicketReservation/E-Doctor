import { configureStore } from '@reduxjs/toolkit'
import signUpSlice from "./features/signUpSlice"
import signInSlice from './features/signInSlice'
import {getBlogsReducer, postBlogsReducer} from './features/blogSlice'
import specialitySlice from "./features/specialitySlice"
import produtSlice from "./features/productSlice"
import nameFilterSlice from './features/nameFilterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        userSignUp:signUpSlice,
        userSignIn:signInSlice,
        getBlogs:getBlogsReducer,
        postBlogs:postBlogsReducer,
        products:produtSlice,
        speciality:specialitySlice,
        nameFilter:nameFilterSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']