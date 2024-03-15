import { useGetProductsQuery } from "../../redux/service/products";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../types/types";
import { FunctionComponent, useState } from "react";
import { Grid } from "@mui/material";

export const ProductList: FunctionComponent = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
      {products?.map((product: Product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
