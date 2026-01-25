import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../utils/url";

export const getProduct = createAsyncThunk("productSlice/getProduct", async () => {
  const { data } = await apiInstance.get("Product/get-products");
  return data.data;
});


export const getProductById = createAsyncThunk("productSlice/getProduct", async (id) => {
  const { data } = await apiInstance.get(`/Product/get-product-by-id?id=${id}`);
  return data
});
