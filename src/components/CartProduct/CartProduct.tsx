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
  //Используем хук useAppDispatch для отправки действий в redux стор
  const dispatch = useAppDispatch();

  //Увеличение количества товара
  const handleIncreaseClick = () => {
    dispatch(cartActions.increment(id));
  };

  //Уменьшение количества товара
  const handleDecreaseClick = () => {
    dispatch(cartActions.decrement(id));
  };

  //Удаление товара
  const handleDeleteClick = () => {
    dispatch(cartActions.delete(id));
  };

  //Вычисляем общую стоимость товара на основе цены и количества
  const totalItemPrice = (quantity * price).toFixed(2);

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
