import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../utils/url";

export const getCategory = createAsyncThunk("categorySlice/getCategory", async () => {
  const { data } = await apiInstance.get("Category/get-categories");
  return data;
});
