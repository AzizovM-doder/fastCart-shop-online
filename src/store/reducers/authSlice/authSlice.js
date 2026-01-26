import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../../api/authAPI/authAPI";
import { saveToken } from "../../../utils/url";
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, actions) => {
        state.loading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, actions) => {
        state.loading = false;
        saveToken(actions.payload.data);
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
