import { api } from "./api";

//Добавляем в наш api эндпоинт с товарами
const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (page = 1) => ({
        url: `products?page=${page}`,
      }),
      providesTags: ["Product"],
      extraOptions: {
        maxRetries: 5,
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
