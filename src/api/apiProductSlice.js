import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../utils/url";

export const getProduct = createAsyncThunk(
  "productSlice/getProduct",
  async (filters) => {
    console.log(filters);
        
    const { data } = await apiInstance.get("Product/get-products",
       {
      params: {
        ProductName: filters?.productName?.toLowerCase(),
        MinPrice: filters?.minPrice ,
        MaxPrice: filters?.maxPrice,
        BrandId: filters?.brandId, 
        ColorId: filters?.colorId, 
        CategoryId: filters?.categoryId , 
        SubCategoryId: filters?.subCategoryId,
        PageNumber: filters?.page ,
        PageSize: filters?.pageSize
      },
    }
  );
    return data.data;
  },
);

export const getProductById = createAsyncThunk(
  "productSlice/getProduct",
  async (id) => {
    const { data } = await apiInstance.get(
      `/Product/get-product-by-id?id=${id}`,
    );
    return data;
  },
);
