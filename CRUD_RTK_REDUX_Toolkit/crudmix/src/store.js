import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "./component/RtkapiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./component/ReduxToolSlice";


export const store = configureStore({
    reducer: combineReducers({ 
        [postApi.reducerPath]: postApi.reducer,
        user: userReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);
