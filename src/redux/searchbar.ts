import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

// Define a type for the slice state
interface query {
  value: string;
}

// Define the initial state using that type
const initialState: query = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // addWish: (state, action) => {
    //   state.value.push(action.payload);
    // },
    // removeWish: (state, action) => {
    //   state.value = state.value.filter((data) => data != action.payload);
    // },

    searchQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchQuery } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearchQuery = (state: RootState) => state.search.value;

export default searchSlice.reducer;
