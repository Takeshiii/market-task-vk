import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../../types/types";

const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
const totalPrice = JSON.parse(sessionStorage.getItem("totalPrice") || "0");

const saveCartToSessionStorage = (state: CartState) => {
  sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
};

const initialState: CartState = {
  cartItems: cartItems,
  totalPrice: totalPrice,
};

const { reducer, actions } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.cartItems = [...state.cartItems, newItem];
      state.totalPrice += newItem.price * newItem.quantity;
      saveCartToSessionStorage(state);
    },
    increment: (state, action: PayloadAction<number>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.totalPrice += itemInCart.price;
        saveCartToSessionStorage(state);
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemInCart) {
        itemInCart.quantity--;
        state.totalPrice -= itemInCart.price;
        saveCartToSessionStorage(state);
      }
    },
    delete: (state, action: PayloadAction<number>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemInCart) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalPrice -= itemInCart.price * itemInCart.quantity;
        saveCartToSessionStorage(state);
      }
    },
  },
});

export default reducer;

export { actions as cartActions };
