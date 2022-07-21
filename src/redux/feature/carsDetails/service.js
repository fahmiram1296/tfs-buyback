// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CARS_API, API_KEY, API_TOKEN } from '../../../utils/constants';

export const CARS_API_TYPE = {
  WARRANTY: "warranty",
  RECALL: "recall",
  DECODE: "decode",
};

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: CARS_API,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: ({ type, vin }) => {
        return {
          url: `${CARS_API}${CARS_API_TYPE[type]}?vin=${vin}`,
          headers: {
            "content-type": "application/json",
            authorization: API_KEY,
            "partner-token": API_TOKEN,
          },
        };                       
        }
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const useQuery = carsApi;

export const carsMiddleware = carsApi.middleware;

export const carsApiReducer = {
  [carsMiddleware.reducerPath]: carsMiddleware.reducer,
};
