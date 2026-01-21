import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_Category = 'https://store-api.softclub.tj/Category/get-categories'
export const getCategory = createAsyncThunk('brandSlice/getBrands' , async()=>{
    try {
        let res = await fetch(API_Category)
        let data = await res.json()
        console.log(data.data);      
        return data.data
    } catch (error) {
        console.error(error);
    }
})
