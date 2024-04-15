import React from 'react'
import {signUpAsync} from "../lib/features/signUpSlice"
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
const Test = () => {
  const user = useAppSelector(state=>state.userSignUp.user)

  const dispatch = useAppDispatch()
  dispatch(signUpAsync())
  return (
    <div>
      test <br />
      <a href="/">Back to home</a>
    </div>
  )
}

export default Test
