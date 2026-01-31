import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/url";
import toast from "react-hot-toast";
const token = localStorage.getItem("token") || "";
export const getCart = createAsyncThunk("cartSlice/getCart", async () => {
  if (token.length > 10) {
    try {
      const req = axiosRequest("Cart/get-products-from-cart");

      const { data } = await toast.promise(req, {
        loading: "Loading cart...",
        // success: "Cart loaded",
        error: "Failed to load cart",
      });

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
});

export const postToCart = createAsyncThunk(
  "cartSlice/postToCart",
  async (id, { dispatch }) => {
    try {
      const req = axiosRequest.post(`Cart/add-product-to-cart?id=${id}`);

      await toast.promise(req, {
        loading: "Adding to cart...",
        success: "Added to cart",
        error: "Alredy in cart",
      });

      dispatch(getCart());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const putIncreaseCart = createAsyncThunk(
  "cartSlice/putIncreaseCart",
  async (id, { dispatch }) => {
    try {
      const req = axiosRequest.put(`Cart/increase-product-in-cart?id=${id}`);

      await toast.promise(req, {
        loading: "Increasing quantity...",
        success: "Quantity updated",
        error: "Failed to update",
      });

      dispatch(getCart());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const putReduceCart = createAsyncThunk(
  "cartSlice/putReduceCart",
  async (id, { dispatch }) => {
    try {
      const req = axiosRequest.put(`Cart/reduce-product-in-cart?id=${id}`);

      await toast.promise(req, {
        loading: "Reducing quantity...",
        success: "Quantity updated",
        error: "Failed to update",
      });

      dispatch(getCart());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const deleteProductInCart = createAsyncThunk(
  "cartSlice/deleteProductInCart",
  async (id, { dispatch }) => {
    try {
      const req = axiosRequest.delete(`Cart/delete-product-from-cart?id=${id}`);

      await toast.promise(req, {
        loading: "Removing product...",
        success: "Product removed",
        error: "Failed to remove",
      });

      dispatch(getCart());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const deleteAllProductInCart = createAsyncThunk(
  "cartSlice/deleteAllProductInCart",
  async (_, { dispatch }) => {
    try {
      const req = axiosRequest.delete(`Cart/clear-cart`);

      await toast.promise(req, {
        loading: "Clearing cart...",
        success: "Cart cleared",
        error: "Failed to clear cart",
      });

      dispatch(getCart());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);
