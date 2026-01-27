import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../utils/url";
export const API_Img = `https://store-api.softclub.tj/images`;
export const getBrands = createAsyncThunk("brandSlice/getColor", async () => {
  try {
    const { data } = await apiInstance.get("Brand/get-brands");
    return data;
  } catch (error) {
    console.error(error);
  }
});
