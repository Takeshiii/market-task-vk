import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../../types/types";
import { FunctionComponent, useState } from "react";
import { ButtonComponent } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart/cartSlice";

export const ProductCard: FunctionComponent<Product> = ({
  id,
  title,
  price,
  description,
  image,
  rating,
}) => {
  const quantity = useSelector((state) => selectProductAmountById(state, id));
  const dispatch = useDispatch();

  const handleAddCLick = () => {
    dispatch(cartActions.add({ id, title, price }));
  };

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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, objectFit: "contain" }}
        image={image}
        component="img"
        loading="lazy"
      />
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>Price: {price}</Typography>
        <Typography>{description}</Typography>
        <Rating value={rating.rate} precision={0.5} readOnly />
        <Typography>Left in stock: {rating.count}</Typography>
      </CardContent>
      <CardActions>
        {quantity === 0 ? (
          <ButtonComponent type="cart" onClick={handleAddCLick} />
        ) : (
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
        )}
      </CardActions>
    </Card>
  );
};
