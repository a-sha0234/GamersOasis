import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "games",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAllGames: builder.query({
      query: () => `games`,
    }),
    getGameById: builder.query({
      query: (id) => `game/${id}`,
    }),
    getGamePlatformById: builder.query({
      query: (id) => `platform/${id}`,
    }),
    getGameImagesById: builder.query({
      query: (id) => `images/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllGamesQuery,
  useGetGameByIdQuery,
  useGetGamePlatformByIdQuery,
  useGetGameImagesByIdQuery,
} = gamesApi;
