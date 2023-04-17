import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

// Define a type for the slice state
interface wishList {
  value: {}[];
}

// Define the initial state using that type
const initialState: wishList = {
  value: [],
};

export const wishSlice = createSlice({
  name: "wishList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addWish: (state, action) => {
      state.value.push(action.payload);
    },

    removeWish: (state, action) => {
      state.value = state.value.filter((data) => data != action.payload);
    },
  },
});

export const { addWish, removeWish } = wishSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.wishlist.value;

export default wishSlice.reducer;
