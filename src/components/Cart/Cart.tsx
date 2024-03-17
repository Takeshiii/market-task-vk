import { FC } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/ui/cart/selectors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CartProduct } from "../CartProduct/CartProduct";
import { CartItem } from "../../types/types";

export const Cart: FC = () => {
  const cartItems: CartItem[] = useAppSelector(selectCartItems);
  const totalPrice: number = useAppSelector(selectTotalPrice);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
      }}>
      <Card
        sx={{
          maxWidth: 500,
        }}>
        <CardContent>
          <Stack spacing={1}>
            <Typography component="h1" variant="h6">
              Cart:
            </Typography>
            {cartItems.length === 0 ? (
              <Typography>Your cart is empty now, let's fix that ;)</Typography>
            ) : (
              <>
                {cartItems.map((item: CartItem) => (
                  <CartProduct key={item.id} {...item} />
                ))}
                <Typography variant="h6">Total cost: ${totalPrice}</Typography>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
