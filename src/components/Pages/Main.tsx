import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Header } from "../Header/Header";
import { ProductList } from "../ProductList/ProductList";
import { Cart } from "../Cart/Cart";

export const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Toolbar />
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
