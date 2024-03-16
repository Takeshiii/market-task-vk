import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Product } from "../../types/types";
import { FunctionComponent, useState } from "react";
import { ButtonComponent } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart/cartSlice";
import { ProductButtons } from "../ProductButtons/ProductButtons";

export const ProductCard: FunctionComponent<Product> = ({
  id,
  title,
  price,
  description,
  image,
  rating,
}) => {
  const [expanded, setExpanded] = useState(false);

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

  const handleToggleDescription = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription = expanded
    ? description
    : `${description.substring(0, 50)}…`;

  const truncatedTitle =
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
