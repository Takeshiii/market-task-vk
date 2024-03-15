import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export const ButtonComponent = ({ type, startIcon, onClick, disabled }) => {
  const icon = startIcon === "add" ? <AddIcon /> : <RemoveIcon />;

  if (type === "quantity") {
    return <Button startIcon={icon} onClick={onClick} disabled={disabled} />;
  }

  if (type === "cart") {
    return <Button onClick={onClick}>Add to cart</Button>;
  }

  if (type === "delete") {
    return (
      <IconButton onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    );
  }
};
