// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Cars } from "./types";

// Define a service using a base URL and expected endpoints
export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getCars: builder.query<Cars, string>({
      query: (vinId) => `cardetails?vin=${vinId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const useQuery = carsApi;

export const carsMiddleware = carsApi.middleware;
export const carsApiReducer = {
  [carsApi.reducerPath]: carsApi.reducer,
};

