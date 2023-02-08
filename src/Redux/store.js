import { configureStore } from "@reduxjs/toolkit";
import { DestinationAPI } from "../api/DestinationAPI";
import { RandomDestinationAPI } from "../api/RandomDestinationAPI";

export const store = configureStore({
  reducer: {
    [DestinationAPI.reducerPath]: DestinationAPI.reducer,
    [RandomDestinationAPI.reducerPath]: RandomDestinationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(DestinationAPI.middleware)
      .concat(RandomDestinationAPI.middleware),
});
