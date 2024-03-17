import { ChangeEvent, FunctionComponent, useState } from "react";
import { useGetProductsQuery } from "../../redux/service/products";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../types/types";

export const ProductList: FunctionComponent = () => {
  const [page, setPage] = useState(1);

  const { data: products, isLoading } = useGetProductsQuery(page);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const startIndex = (page - 1) * 8;
  const endIndex = startIndex + 8;
  const currentProducts = products?.slice(startIndex, endIndex);

  const totalPages = Math.ceil((products?.length || 0) / 8);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid container spacing={3}>
        {currentProducts?.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ProductCard {...product} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        color="primary"
        page={page}
        onChange={handleChange}
        aria-label="Products pagination"
      />
    </Box>
  );
};
