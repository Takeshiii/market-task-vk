const selectCartModule = (state) => state.cart;

export const selectCartItems = (state) => selectCartModule(state).cartItems;

export const selectTotalPrice = (state) =>
  selectCartModule(state).totalPrice.toFixed(2);

export const selectProductAmountById = (state, productId) =>
  selectCartModule(state).cartItems.find((item) => item.id === productId)
    ?.quantity || 0;
