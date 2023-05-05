"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";
import filterReducer from "./Features/filter/filterSlice";
import modalSlice from "./Features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
