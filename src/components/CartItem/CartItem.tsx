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

export const CartItem: FunctionComponent<Product> = ({
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
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>Per one:{price}</Typography>
        <Typography>Per all:{totalItemPrice}</Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <ButtonComponent
            type="quantity"
            onClick={handleDecreaseClick}
            disabled={quantity === 1}
          />
          {quantity}
          <ButtonComponent
            type="quantity"
            startIcon="add"
            onClick={handleIncreaseClick}
            disabled={quantity === 10}
          />
          <ButtonComponent type="delete" onClick={handleDeleteClick} />
        </Stack>
      </CardActions>
    </Card>
  );
};
