import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const { reducer, actions } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      const newItem = { ...payload, quantity: 1 };
      state.cartItems = [...state.cartItems, newItem];
      state.totalPrice += newItem.price * newItem.quantity;
    },
    increment: (state, { payload }) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload);
      itemInCart.quantity++;
      state.totalPrice += itemInCart.price;
    },
    decrement: (state, { payload }) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload);
      itemInCart.quantity--;
      state.totalPrice -= itemInCart.price;
    },
    delete: (state, { payload }) => {
      const itemInCart = state.cartItems.find((item) => item.id === payload);
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      state.totalPrice -= itemInCart.price * itemInCart.quantity;
    },
  },
});

export default reducer;

export { actions as cartActions };
