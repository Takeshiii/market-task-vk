import { ChangeEvent, FC, useState } from "react";
import { useGetProductsQuery } from "../../redux/service/products";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../types/types";

export const ProductList: FC = () => {
  //Данный useState используется для управления текущей страницей
  const [page, setPage] = useState<number>(1);

  //Используем RTK Query хук для получения данных о товарах
  const {
    data: products,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetProductsQuery(page);

  //Отображаем лоадер если данные грузятся или обновляются
  if (isLoading || isFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <CircularProgress />;
      </Box>
    );
  }

  //В случае ошибки будет редирект на страницу Error
  if (isError) {
    throw error;
  }

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex: number = (page - 1) * 8;
  const endIndex: number = startIndex + 8;
  const currentProducts = products?.slice(startIndex, endIndex);

  const totalPages: number = Math.ceil((products?.length || 0) / 8);

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
