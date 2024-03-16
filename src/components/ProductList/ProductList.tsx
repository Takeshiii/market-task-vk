import { useGetProductsQuery } from "../../redux/service/products";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../types/types";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { Box, Grid, Pagination, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

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
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {currentProducts?.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </Box>
  );
};
