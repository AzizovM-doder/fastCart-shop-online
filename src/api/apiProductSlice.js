import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../utils/url";
import toast from "react-hot-toast";

export const getProduct = createAsyncThunk(
  "productSlice/getProduct",
  async (filters) => {
    try {
      const res = await toast.promise(
        apiInstance.get("Product/get-products", {
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
        }),
        {
          loading: "Loading...",
          // success: "Products loaded",
          error: "Something went wrong!",
        }
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "productSlice/getProduct",
  async (id) => {
    try {
      const res = await toast.promise(
        apiInstance.get(`/Product/get-product-by-id?id=${id}`),
        {
          loading: "Loading product...",
          // success: "Product loaded",
          error: "Something went wrong!",
        }
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
