import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";
export const getUserById = createAsyncThunk(
  "accountSlice/getUserById",
  async (id) => {
    const { data } = await axiosRequest.get(
      `UserProfile/get-user-profile-by-id?id=${id}`,
    );
    return data.data;
  },
);
