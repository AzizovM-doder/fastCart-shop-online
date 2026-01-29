import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";
import toast from "react-hot-toast";

export const getUserById = createAsyncThunk(
  "accountSlice/getUserById",
  async (id) => {
    try {
      const req = axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`
      );

      const { data } = await toast.promise(req, {
        loading: "Loading user...",
        // success: "User loaded",
        error: "Failed to load user",
      });

      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const putUpdateUser = createAsyncThunk(
  "accountSlice/putUser",
  async (formData) => {
    try {
      const req = axiosRequest.put(
        `UserProfile/update-user-profile`,
        formData
      );

      const { data } = await toast.promise(req, {
        loading: "Updating profile...",
        success: "Profile updated",
        error: "Update failed",
      });

      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const deleteUserProfile = createAsyncThunk(
  "accountSlice/deleteUserProfile",
  async (id) => {
    try {
      const req = axiosRequest.delete(
        `UserProfile/delete-user?id=${id}`
      );

      const { data } = await toast.promise(req, {
        loading: "Deleting user...",
        success: "User deleted",
        error: "Delete failed",
      });

      return data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
