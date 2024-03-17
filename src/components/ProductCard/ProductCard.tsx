import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { cartActions } from "../../redux/ui/cart/cartSlice";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ButtonComponent } from "../Button/Button";
import { ProductButtons } from "../ProductButtons/ProductButtons";
import { Product } from "../../types/types";

export const ProductCard: FC<Product> = ({
  id,
  title,
  price,
  description,
  image,
  rating,
}) => {
  //Используем данный useState для управление отображением описания товара
  const [expanded, setExpanded] = useState<boolean>(false);

  //Используем хук useAppSelector для получения количества товара в корзине
  const quantity: number = useAppSelector((state) =>
    selectProductAmountById(state, id)
  );

  //Используем хук useAppDispatch для отправки действий в redux стор
  const dispatch = useAppDispatch();

  //Добавление товара
  const handleAddCLick = () => {
    dispatch(cartActions.add({ id, title, price, quantity }));
  };

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

  const handleToggleDescription = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription: string = expanded
    ? description
    : `${description.substring(0, 50)}…`;

  const truncatedTitle: string =
    title.length > 30 ? `${title.substring(0, 30)}…` : title;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, objectFit: "contain" }}
        image={image}
        component="img"
        loading="lazy"
      />
      <CardContent>
        <Stack spacing={1}>
          <Typography
            sx={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={title}>
            {truncatedTitle}
          </Typography>
          <Typography>{truncatedDescription}</Typography>
          {expanded ? (
            <Button
              variant="text"
              size="small"
              onClick={handleToggleDescription}>
              Hide
            </Button>
          ) : (
            <Button
              variant="text"
              size="small"
              onClick={handleToggleDescription}>
              More details
            </Button>
          )}
          <Rating value={rating.rate} precision={0.5} readOnly />
          <Typography sx={{ fontWeight: "bold" }}>${price}</Typography>
          <Typography>Left in stock: {rating.count}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        {quantity === 0 ? (
          <ButtonComponent type="cart" onClick={handleAddCLick} />
        ) : (
          <ProductButtons
            quantity={quantity}
            handleDecreaseClick={handleDecreaseClick}
            handleIncreaseClick={handleIncreaseClick}
            handleDeleteClick={handleDeleteClick}
          />
        )}
      </CardActions>
    </Card>
  );
};
