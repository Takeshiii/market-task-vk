import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
const totalPrice = JSON.parse(sessionStorage.getItem("totalPrice")) || 0;

const saveCartToSessionStorage = (state) => {
  sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
};

const initialState = {
  cartItems: cartItems,
  totalPrice: totalPrice,
};

const { reducer, actions } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const newItem = { ...payload, quantity: 1 };
      state.cartItems = [...state.cartItems, newItem];
      state.totalPrice += newItem.price * newItem.quantity;
      saveCartToSessionStorage(state);
    },
    increment: (state, { payload }) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload);
      itemInCart.quantity++;
      state.totalPrice += itemInCart.price;
      saveCartToSessionStorage(state);
    },
    decrement: (state, { payload }) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload);
      itemInCart.quantity--;
      state.totalPrice -= itemInCart.price;
      saveCartToSessionStorage(state);
    },
    delete: (state, { payload }) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload);
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      state.totalPrice -= itemInCart.price * itemInCart.quantity;
      saveCartToSessionStorage(state);
    },
  },
});

export default reducer;

export { actions as cartActions };
