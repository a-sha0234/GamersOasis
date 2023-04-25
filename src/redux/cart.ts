import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

// interface CartState {
//   value: {}[];
// }

// const initialState: CartState = {
//   value: [],
// };

type CartItem = {
  title: string;
  quantity: number;
};

type CartState = {
  value: CartItem[];
};

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCart: (state, action) => {
      let existingItem = state.value.find(
        (item) => item.title === action.payload.title
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },

    removeCart: (state, action) => {},
    clearCart: (state, action) => {
      state.value = [];
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
