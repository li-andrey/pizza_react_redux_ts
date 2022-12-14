import { RootState } from './../store';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

enum PizzaStatus {
  Loading = "loading",
  Success = "success",
  Error = "error",
}

export type PizzaType = {
  category: number;
  id: string;
  imageUrl: string;
  price: number;
  rating: number[];
  sizes: number[];
  types: number[];
  title: string;
}

interface PizzaSliceState {
  items: PizzaType[],
  status: PizzaStatus,
}

const initialState: PizzaSliceState = {
  items: [],
  status: PizzaStatus.Loading,
};

type FetchPizzasArgs = {
  category: string;
  sortBy: string;
  order: string;
}

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params: FetchPizzasArgs) => {
    const { category, sortBy, order } = params;
    const res = await axios.get<PizzaType[]>(
      `https://637db4019c2635df8f8c982e.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
    );
    return res.data;
  }
);

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    getItems: (state, action: PayloadAction<PizzaType[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = PizzaStatus.Loading;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = PizzaStatus.Success;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = PizzaStatus.Error;
        state.items = [];
      });
  },
});

export const pizzasSelector = (state: RootState) => state.pizzas;

export const { getItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
