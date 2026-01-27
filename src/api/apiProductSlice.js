import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../utils/url";

export const getProduct = createAsyncThunk(
  "productSlice/getProduct",
  async (filters) => {
    try {
      const { data } = await apiInstance.get("Product/get-products", {
        params: {
          ProductName: filters?.productName?.toLowerCase(),
          MinPrice: filters?.minPrice,
          MaxPrice: filters?.maxPrice,
          BrandId: filters?.brandId,
          ColorId: filters?.colorId,
          CategoryId: filters?.categoryId,
          SubCategoryId: filters?.subCategoryId,
          PageNumber: filters?.page,
          PageSize: filters?.pageSize,
        },
      });
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getProductById = createAsyncThunk(
  "productSlice/getProduct",
  async (id) => {
    try {
      const { data } = await apiInstance.get(
        `/Product/get-product-by-id?id=${id}`,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
