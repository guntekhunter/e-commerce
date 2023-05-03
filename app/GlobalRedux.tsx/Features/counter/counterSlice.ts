"use client";

import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface counterState {
  value: any;
}

const initialState: counterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push: (state, action) => {
      if (!state.value.includes(action.payload)) {
        {
          state.value.push(action.payload);
        }
      }
    },
    remove: (state, action) => {
      const itemId = parseInt(action.payload);
      state.value = state.value.filter((item: any) => item != itemId);
    },
  },
});

export const { push, remove } = counterSlice.actions;
// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
