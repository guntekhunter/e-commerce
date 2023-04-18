"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
  // value:number
  value: any;
  data: any;
}

const initialState: counterState = {
  // value:0
  value: [],
  data: "ini",
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
    filter: (state, action) => {state.data = action.payload},
  },
});

export const { push, filter } = counterSlice.actions;
// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
