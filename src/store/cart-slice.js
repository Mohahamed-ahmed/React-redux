import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      state.totalQuantity++;
      state.changed = true;
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (product >= 0) {
        state.cartItems[product].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    decreaseItemQuantity(state, action) {
      state.totalQuantity--;
      state.changed = true;
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      const item = state.cartItems[itemIndex];

      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== itemId
        );
      } else {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          quantity: state.cartItems[itemIndex].quantity - 1,
        };
      }
    },
    increaseItemQuantity(state, action) {
      state.totalQuantity++;
      state.changed = true;
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === itemId
      );

      state.cartItems[itemIndex] = {
        ...state.cartItems[itemIndex],
        quantity: state.cartItems[itemIndex].quantity + 1,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
