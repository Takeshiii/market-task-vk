import { FunctionComponent } from "react";
import { CartProduct } from "../CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../types/types";
import { cartActions } from "../../redux/ui/cart/cartSlice";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/ui/cart/selectors";
import { Card, CardContent, Paper, Stack, Typography } from "@mui/material";

export const Cart: FunctionComponent<Product> = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Card sx={{ position: "sticky", top: 0, maxWidth: 500 }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">Cart:</Typography>
          {cartItems.length === 0 ? (
            <Typography>Your cart is empty now, let's fix that ;)</Typography>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartProduct key={item.id} {...item} />
              ))}
              <Typography variant="h6">Total cost: ${totalPrice}</Typography>
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
