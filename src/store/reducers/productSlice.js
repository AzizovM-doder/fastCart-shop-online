import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from '../../api/apiProductSlice'
export const productSlice = createSlice({
  name: 'productSlice',
  initialState : {
    product : [],
    data : []
  },
  reducers: {},
  extraReducers : (builder) =>{
    builder.addCase(getProduct.fulfilled , (state, actions) =>{
        state.product = actions.payload.products
        state.data = actions.payload
    })
  }
})

export const {} = productSlice.actions
export default productSlice.reducer