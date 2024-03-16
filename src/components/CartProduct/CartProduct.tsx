import { FunctionComponent } from "react";
import { Product } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { ButtonComponent } from "../Button/Button";
import { cartActions } from "../../redux/ui/cart/cartSlice";
import { ProductButtons } from "../ProductButtons/ProductButtons";

export const CartProduct: FunctionComponent<Product> = ({
  id,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

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
