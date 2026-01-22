import { createAsyncThunk } from "@reduxjs/toolkit"
<<<<<<< HEAD
export const API_Img = `https://store-api.softclub.tj/images`
export const API_Brand = `https://store-api.softclub.tj/Brand/get-brands`
=======

const API_Brand = `https://store-api.softclub.tj/Brand/get-brands`
>>>>>>> 7c3794320c57b66222b5cb4e09e735df8fdbe9f7
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