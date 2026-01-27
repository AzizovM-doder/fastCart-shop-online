import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../utils/url";

export const getCategory = createAsyncThunk(
  "categorySlice/getCategory",
  async () => {
    try {
      const { data } = await apiInstance.get("Category/get-categories");
      return data;
    } catch (error) {
      console.error(error);
    }
  },
);
