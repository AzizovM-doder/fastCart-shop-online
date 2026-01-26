import { createAsyncThunk } from "@reduxjs/toolkit";
import {  axiosRequest } from "../../utils/url";

export const getCart = createAsyncThunk("cartSlice/getCart", async () => {
  const { data } = await axiosRequest("Cart/get-products-from-cart");
  return data;
});

export const postToCart = createAsyncThunk(
  "cartSlice/postToCart",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  },
);
export const putIncreaseCart = createAsyncThunk(
  "cartSlice/putIncreaseCart",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.put(`Cart/increase-product-in-cart?id=${id}`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  },
);
export const putReduceCart = createAsyncThunk(
  "cartSlice/putReduceCart",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.put(`Cart/reduce-product-in-cart?id=${id}`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  },
);
export const deleteProductInCart = createAsyncThunk(
  "cartSlice/deleteProductInCart",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.delete(`Cart/delete-product-from-cart?id=${id}`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  },
);

export const deleteAllProductInCart = createAsyncThunk(
  "cartSlice/deleteAllProductInCart",
  async (_, { dispatch }) => {
    try {
      await axiosRequest.delete(`Cart/clear-cart`);
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  },
);
