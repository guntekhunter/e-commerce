"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface filterState {
  value: any;
}

const initialState: filterState = {
  value: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter: (state, action) => {state.value = action.payload},
  },
});

export const { filter } = filterSlice.actions;
// export const {increment, decrement, incrementByAmount} = filterSlice.actions;

export default filterSlice.reducer;
