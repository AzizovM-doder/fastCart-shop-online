import { createAsyncThunk } from "@reduxjs/toolkit";
export const API_Img = `https://store-api.softclub.tj/images`;
export const API_Brand = `https://store-api.softclub.tj/Brand/get-brands`;

export const getBrands = createAsyncThunk("brandSlice/getBrands", async () => {
  try {
    let res = await fetch(API_Brand);
    let data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
