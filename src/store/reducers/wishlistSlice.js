import { createSlice } from "@reduxjs/toolkit";

const getInitialWishlist = () => {
  try {
    const raw = localStorage.getItem("wishlist");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("wishlist parse error", e);
    return [];
  }
};

export const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: {
    items: getInitialWishlist(),
  },

  reducers: {
    addToWishlist: (state, action) => {
      // just in case, hard reset if something went wrong
      if (!Array.isArray(state.items)) state.items = [];

      const item = action.payload;
      const exist = state.items.find((e) => e.id === item.id);

      if (exist) {
        state.items = state.items.filter((e) => e.id !== item.id);
      } else {
        state.items.push({ ...item, qty: 1 });
      }

      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
