import { configureStore } from "@reduxjs/toolkit";
import { DestinationAPI } from "../api/DestinationAPI";

export const store = configureStore({
  reducer: { [DestinationAPI.reducerPath]: DestinationAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DestinationAPI.middleware),
});
