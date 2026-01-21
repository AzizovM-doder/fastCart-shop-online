import { configureStore } from '@reduxjs/toolkit'
import brandSlice from './reducers/brandSlice'

export const store = configureStore({
  reducer: {
    brandSlice,
  },
})