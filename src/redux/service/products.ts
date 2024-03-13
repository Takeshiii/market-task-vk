import { api } from "./api";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "products",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
