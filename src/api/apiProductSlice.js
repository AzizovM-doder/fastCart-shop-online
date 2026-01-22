import { createAsyncThunk } from "@reduxjs/toolkit"

export const API_Product = `https://store-api.softclub.tj/Product/get-products`
export const getProduct = createAsyncThunk('productSlice/getProduct' , async()=>{
    try {
        let res = await fetch(API_Product)
        let data = await res.json()
        console.log(data.data);
        return data.data
    } catch (error) {
        console.error(error);
    }
})