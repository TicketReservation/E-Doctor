import { configureStore } from '@reduxjs/toolkit'
import signUpSlice from "./features/signUpSlice"
import signInSlice from './features/signInSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        userSignUp:signUpSlice,
        userSignIn:signInSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']