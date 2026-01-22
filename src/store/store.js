import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import productSlice from "./reducers/productSlice";
import brandSlice from "./reducers/brandSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    categorySlice,
    productSlice,
    brandSlice,
    cartSlice,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cartSlice.items));
});
