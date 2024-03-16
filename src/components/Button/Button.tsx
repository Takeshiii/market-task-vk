import { Button, IconButton, makeStyles } from "@mui/material";
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
      />
    );
  }

  if (type === "cart") {
    return (
      <Button onClick={onClick} variant="contained" sx={{ width: "100%" }}>
        Add to cart
      </Button>
    );
  }

  if (type === "delete") {
    return (
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    );
  }
};
