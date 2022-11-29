import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce(
        (s, item) => item.price * item.count + s,
        0
      );
      state.totalCount = state.items.reduce((s, item) => item.count + s, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice = state.items.reduce(
          (s, item) => item.price * item.count + s,
          0
        );
        state.totalCount = state.items.reduce((s, item) => item.count + s, 0);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (s, item) => item.price * item.count + s,
        0
      );
      state.totalCount = state.items.reduce((s, item) => item.count + s, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = state.items.reduce(
        (s, item) => item.price * item.count + s,
        0
      );
      state.totalCount = state.items.reduce((s, item) => item.count + s, 0);
    },
  },
});

export const cartSelector = (state) => state.cart;
export const cartSelectorById = (id) => (state) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
