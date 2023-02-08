import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RandomDestinationAPI = createApi({
  reducerPath: "apiRandomDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    getRandomDestination: builder.query({
      query: () => ({
        url: "/addresses",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRandomDestinationQuery } = RandomDestinationAPI;
