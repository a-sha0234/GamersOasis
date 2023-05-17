import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

// Define a type for the slice state
interface sidebar {
  value: boolean;
}

// Define the initial state using that type
const initialState: sidebar = {
  value: false,
};

export const SidebarSlice = createSlice({
  name: "cartSidebar",

  initialState,
  reducers: {
    handleSideBar: (state) => {
      // state.value = !state.value;
      state.value = true;
    },
    closeSideBar: (state) => {
      state.value = false;
    },
  },
});

export const { handleSideBar, closeSideBar } = SidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSidebar = (state: RootState) => state.sidebar.value;

export default SidebarSlice.reducer;
