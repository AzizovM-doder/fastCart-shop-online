import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import productSlice from "./reducers/productSlice";
import brandSlice from "./reducers/brandSlice";
import cartSlice from "./reducers/cartSlice";
import wishlistSlice from "./reducers/wishlistSlice";
<<<<<<< HEAD
=======
import signUpSlice from "./reducers/auth/signUpSlice/signUpSlice";
>>>>>>> 3d6c9b2b399e267a249455dbc96e1e56f9cecb29

export const store = configureStore({
  reducer: {
    categorySlice,
    productSlice,
    brandSlice,
    cartSlice,
    wishlistSlice,
<<<<<<< HEAD
=======
    signUpSlice
>>>>>>> 3d6c9b2b399e267a249455dbc96e1e56f9cecb29
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("wishlist", JSON.stringify(state.wishlistSlice.items));
});
