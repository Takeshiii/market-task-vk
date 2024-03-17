import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

//Инициализируем пустой api сервис в который мы будем внердять наши эндпоинты
export const api = createApi({
  reducerPath: "api",
  baseQuery: retry(fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }), {
    maxRetries: 5,
  }),
  refetchOnReconnect: true,
  tagTypes: ["Product"],
  endpoints: () => ({}),
});
