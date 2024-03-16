import { FunctionComponent } from "react";
import { Cart } from "./components/Cart/Cart";
import { ProductList } from "./components/ProductList/ProductList";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Pagination,
  Stack,
  Toolbar,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

store.subscribe(() => {
  console.log(store.getState());
});

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  );
};
