import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../../../api/accountAPI/accountAPI";
export const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    account : {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.fulfilled, (state, actions) => {
      state.account = actions.payload;
    });
  },
});

export const {} = accountSlice.actions;
export default accountSlice.reducer;