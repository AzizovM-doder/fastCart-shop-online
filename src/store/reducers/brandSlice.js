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