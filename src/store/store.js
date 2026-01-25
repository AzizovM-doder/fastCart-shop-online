import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import productSlice from "./reducers/productSlice";
import brandSlice from "./reducers/brandSlice";
import cartSlice from "./reducers/cartSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import signUpSlice from "./reducers/auth/signUpSlice/signUpSlice";

export const store = configureStore({
  reducer: {
    categorySlice,
    productSlice,
    brandSlice,
    cartSlice,
    wishlistSlice,
    signUpSlice
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("wishlist", JSON.stringify(state.wishlistSlice.items));
});
