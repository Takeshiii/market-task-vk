import { createBrowserRouter } from "react-router-dom";
import { Main } from "../components/Pages/Main";
import { ProductList } from "../components/ProductList/ProductList";
import { Cart } from "../components/Cart/Cart";
import { Error } from "../components/Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "products", element: <ProductList /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);