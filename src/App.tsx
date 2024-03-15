import { FunctionComponent } from "react";
import { Cart } from "./components/Cart/Cart";
import { ProductList } from "./components/ProductList/ProductList";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CssBaseline, Grid } from "@mui/material";

store.subscribe(() => {
  console.log(store.getState());
});

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item xs={9}>
          <ProductList />
        </Grid>
        <Grid item xs={3}>
          <Cart />
        </Grid>
      </Grid>
    </Provider>
  );
};
