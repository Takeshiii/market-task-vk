import { Box, CssBaseline, Grid, Toolbar } from "@mui/material";
import { Header } from "../Header/Header";
import { ProductList } from "../ProductList/ProductList";
import { Cart } from "../Cart/Cart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet } from "react-router-dom";

export const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <CssBaseline />
      <Toolbar />
      <Header />
      {isMobile ? (
        <Outlet />
      ) : (
        <Grid container spacing={2} sx={{ px: 2, marginTop: 1 }}>
          <Grid item xs={9}>
            <ProductList />
          </Grid>
          <Grid item xs={3}>
            <Cart />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
