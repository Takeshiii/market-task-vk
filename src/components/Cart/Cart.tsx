import { FunctionComponent } from "react";
import { CartItem } from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../types/types";
import { cartActions } from "../../redux/ui/cart/cartSlice";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/ui/cart/selectors";
import { Stack, Typography } from "@mui/material";

export const Cart: FunctionComponent<Product> = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Stack>
      <Typography>Cart</Typography>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Typography>Result: {totalPrice}</Typography>
    </Stack>
  );
};
