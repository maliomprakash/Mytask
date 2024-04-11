import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ApiRTKSlice } from "../ApiRTKslice";
import userReducer from "../ReduxToolkit";

export const store = configureStore({
  reducer: {
    [ApiRTKSlice.reducerPath]: ApiRTKSlice.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiRTKSlice.middleware),
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ApiSlice.middleware],
});

setupListeners(store.dispatch);