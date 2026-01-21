import { createAsyncThunk } from "@reduxjs/toolkit"

const API_Brand = `https://store-api.softclub.tj/Brand/get-brands`
export const getBrands = createAsyncThunk('brandSlice/getBrands' , async()=>{
    try {
        let res = await fetch(API_Brand)
        let data = await res.json()
        console.log(data.data);      
        return data.data
    } catch (error) {
        console.error(error);
    }
})