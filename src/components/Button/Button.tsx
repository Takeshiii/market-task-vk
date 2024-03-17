import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export const ButtonComponent = ({ type, startIcon, onClick, disabled }) => {
  const icon = startIcon === "add" ? <AddIcon /> : <RemoveIcon />;

  if (type === "quantity") {
    return (
      <Button
        variant="contained"
        startIcon={icon}
        onClick={onClick}
        disabled={disabled}
        sx={{
          paddingLeft: 3,
        }}
        aria-label="Product Quantity"
      />
    );
  }

  if (type === "cart") {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        sx={{ width: "100%" }}
        aria-label="Add to cart">
        Add to cart
      </Button>
    );
  }

  if (type === "delete") {
    return (
      <IconButton onClick={onClick} aria-label="Delete product">
        <DeleteIcon />
      </IconButton>
    );
  }
};
