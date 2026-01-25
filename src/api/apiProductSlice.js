import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstance } from "../utils/url";

<<<<<<< HEAD
export const getProduct = createAsyncThunk("productSlice/getProduct", async () => {
  const { data } = await apiInstance.get("Product/get-products");
  return data.data;
});


export const getProductById = createAsyncThunk("productSlice/getProduct", async (id) => {
  const { data } = await apiInstance.get(`/Product/get-product-by-id?id=${id}`);
  return data
});
=======
export const API_Product = `https://store-api.softclub.tj/Product/get-products`
export const getProduct = createAsyncThunk('productSlice/getProduct' , async()=>{
    try {
        let res = await fetch(API_Product)
        let data = await res.json()
        return data.data
    } catch (error) {
        console.error(error);
    }
})
>>>>>>> 3d6c9b2b399e267a249455dbc96e1e56f9cecb29
