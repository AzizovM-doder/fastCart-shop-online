import { configureStore } from '@reduxjs/toolkit'
import brandSlice from './reducers/brandSlice'
import categorySlice from './reducers/categorySlice'
import productSlice from './reducers/productSlice'


export const store = configureStore({
  reducer: {
    brandSlice,
    categorySlice,
    productSlice
  },
})