import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { gamesApi } from "../redux/games";
import counterReducer from "../redux/cart";
import filterReducer from "./filter";
import wishReducer from "../redux/wishlist";
import searchReducer from "../redux/searchbar";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [gamesApi.reducerPath]: gamesApi.reducer,
    counter: counterReducer,
    filter: filterReducer,
    wishlist: wishReducer,
    search: searchReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
