import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../utils/url";
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async (user) => {
    try {
      const req = apiInstance.post("Account/register", user);

      const { data } = await toast.promise(req, {
        loading: "Creating account...",
        success: "Account created",
        error: "Registration failed",
      });

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async (user) => {
    try {
      const req = apiInstance.post("Account/login", user);

      const { data } = await toast.promise(req, {
        loading: "Signing in...",
        success: "Logged in",
        error: "Login failed",
      });

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
