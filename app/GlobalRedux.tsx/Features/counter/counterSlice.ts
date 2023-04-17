"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
  // value:number
  value: any;
}

const initialState: counterState = {
  // value:0
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {state.value+=1},
    push: (state, action) => {
      if (!state.value.includes(action.payload)) {
        {
          state.value.push(action.payload);
        }
      }
    },
    // decrement: (state) => {state.value -= 1},
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // }
  },
});

export const { push } = counterSlice.actions;
// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
