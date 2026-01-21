import { createSlice } from '@reduxjs/toolkit'
import { getCategory } from '../../api/apiCategory'
export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState : {
    category : []
  },
  reducers: {},
  extraReducers : (builder) =>{
    builder.addCase(getCategory.fulfilled , (state, actions) =>{
        state.category = actions.payload
    })
  }
})

export const {} = categorySlice.actions
export default categorySlice.reducer