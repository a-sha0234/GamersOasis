import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

type CartItem = {
  id: any;
  title: string;
  quantity: number;
  price: any;
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

    removeCart: (state, action) => {
      const id = Number(action.payload);

      // Find the index of the item to be removed
      const itemIndex = state.value.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const updatedCart = [...state.value];

        if (updatedCart[itemIndex].quantity > 1) {
          // Decrease quantity of item if it is greater than 1
          updatedCart[itemIndex].quantity--;
        } else {
          // Remove the item from the cart if its quantity is 1
          updatedCart.splice(itemIndex, 1);
        }

        state.value = updatedCart;
      }
    },
    clearCart: (state, action) => {
      state.value = [];
    },
  },
});

export const { addCart, removeCart, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
