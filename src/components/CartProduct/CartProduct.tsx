import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { cartActions } from "../../redux/ui/cart/cartSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ProductButtons } from "../ProductButtons/ProductButtons";
import { CartItem } from "../../types/types";

export const CartProduct: FC<CartItem> = ({ id, title, price, quantity }) => {
  const dispatch = useAppDispatch();

  const totalItemPrice = (quantity * price).toFixed(2);

  const handleIncreaseClick = () => {
    dispatch(cartActions.increment(id));
  };

  const handleDecreaseClick = () => {
    dispatch(cartActions.decrement(id));
  };

  const handleDeleteClick = () => {
    dispatch(cartActions.delete(id));
  };

  return (
    <Card elevation={0}>
      <Stack sx={{ display: "flex" }}>
        <Stack spacing={1}>
          <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
          <Typography>Price: ${price}</Typography>
          <Typography>Total: ${totalItemPrice}</Typography>
        </Stack>
        <CardActions sx={{ padding: 0 }}>
          <ProductButtons
            quantity={quantity}
            handleDecreaseClick={handleDecreaseClick}
            handleIncreaseClick={handleIncreaseClick}
            handleDeleteClick={handleDeleteClick}
          />
        </CardActions>
      </Stack>
    </Card>
  );
};
