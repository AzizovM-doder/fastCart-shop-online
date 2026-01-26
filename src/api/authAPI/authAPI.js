import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../utils/url";

export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async (user) => {
    const { data } = await apiInstance.post("Account/register", user);
    return data;
  },
);

export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async (user) => {
    const { data } = await apiInstance.post("Account/login", user);
    return data;
  },
);
