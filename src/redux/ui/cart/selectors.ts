import { RootState } from "../../store";
import { CartItem } from "../../../types/types";

//Создаем селекторы для упрощения доступа к данным
const selectCartModule = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState): CartItem[] =>
  selectCartModule(state).cartItems;

export const selectTotalPrice = (state: RootState): number =>
  parseFloat(selectCartModule(state).totalPrice.toFixed(2));

export const selectProductAmountById = (
  state: RootState,
  productId: number
): number =>
  selectCartModule(state).cartItems.find((item) => item.id === productId)
    ?.quantity || 0;
