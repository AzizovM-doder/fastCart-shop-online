<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "../../api/apiBrandSlice";
export const brandSlice = createSlice({
  name: "brandSlice",
  initialState: {
    brand: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, actions) => {
      state.brand = actions.payload;
    });
  },
});

export const {} = brandSlice.actions;
export default brandSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit'
import { getBrands } from '../../api/apiBrandSlice'
export const brandSlice = createSlice({
  name: 'brandSlice',
  initialState : {
    data : []
  },
  reducers: {},
  extraReducers : (builder) =>{
    builder.addCase(getBrands.fulfilled , (state, actions) =>{
        state.data = actions.payload
    })
  }
})

export const {} = brandSlice.actions
export default brandSlice.reducer
>>>>>>> 7c3794320c57b66222b5cb4e09e735df8fdbe9f7
