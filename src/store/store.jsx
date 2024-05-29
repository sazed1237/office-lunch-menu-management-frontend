import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from '../store/userSlice'

export const store = configureStore({
  reducer: {
    user: useReducer
  },
})