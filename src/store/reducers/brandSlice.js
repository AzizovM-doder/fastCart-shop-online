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
