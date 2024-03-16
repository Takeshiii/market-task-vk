import { Stack, Typography } from "@mui/material";
import { ButtonComponent } from "../Button/Button";

export const ProductButtons = ({
  quantity,
  handleDecreaseClick,
  handleIncreaseClick,
  handleDeleteClick,
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ButtonComponent
        type="quantity"
        onClick={handleDecreaseClick}
        disabled={quantity === 1}
      />
      <Typography>{quantity}</Typography>
      <ButtonComponent
        type="quantity"
        startIcon="add"
        onClick={handleIncreaseClick}
        disabled={quantity === 10}
      />
      <ButtonComponent type="delete" onClick={handleDeleteClick} />
    </Stack>
  );
};
