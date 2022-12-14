import { RootState } from './../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortProperty {
  Raiting_Desc = "raiting",
  Raiting_Asc = "-raiting",
  Price_Desc = "price",
  Price_Asc = "-price",
  Title_Desc = "title",
  Title_Asc = "-title",
}

export type Sort = {
  name: string;
  property: SortProperty;
}

interface filterSliceState {
  searchValue: string;
  categoryId: number;
  sortType: Sort;
}

const initialState: filterSliceState = {
  searchValue: "",
  categoryId: 0,
  sortType: {
    name: "популярности",
    property: SortProperty.Raiting_Desc,
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<Sort>) => {
      state.sortType = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setCategory, setSortType, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
