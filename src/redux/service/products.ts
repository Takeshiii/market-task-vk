import { api } from "./api";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (page = 1) => ({
        url: `products?&page=${page}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
