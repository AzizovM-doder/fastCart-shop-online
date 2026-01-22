import { configureStore } from '@reduxjs/toolkit'
import brandSlice from './reducers/brandSlice'
<<<<<<< HEAD
import categorySlice from './reducers/categorySlice'
import productSlice from './reducers/productSlice'
=======
>>>>>>> 7c3794320c57b66222b5cb4e09e735df8fdbe9f7

export const store = configureStore({
  reducer: {
    brandSlice,
<<<<<<< HEAD
    categorySlice,
    productSlice
=======
>>>>>>> 7c3794320c57b66222b5cb4e09e735df8fdbe9f7
  },
})