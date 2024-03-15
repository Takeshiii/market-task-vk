import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./service/api";
import cartReducer from "./ui/cart/cartSlice";
import { loggerMiddleware } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, loggerMiddleware),
});

setupListeners(store.dispatch);
