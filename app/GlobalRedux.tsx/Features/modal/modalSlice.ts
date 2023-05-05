"use client";

import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface counterState {
  value: boolean;
}

const initialState: counterState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state, action) => {
      state.value = action.payload;
    },
    hide: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { show, hide } = counterSlice.actions;
// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
