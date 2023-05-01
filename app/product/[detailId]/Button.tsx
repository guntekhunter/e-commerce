"use client";
import { Chart } from "@/typings";
import { Result } from "postcss";
import React, { useState } from "react";
import globalChart from "../../GlobalChart";

// redux global component
import { useDispatch } from "react-redux";
import { push } from "../../GlobalRedux.tsx/Features/counter/counterSlice";

// @ts-ignore
export default function Button({ id }) {
  // redux
  const dispatch = useDispatch();

  const handleAddChart = async () => {
    dispatch(push(id));
  };
  return (
    <button
      className="bg-black text-white px-[2rem] py-[.2rem] rounded-full"
      onClick={handleAddChart}
    >
      Add
    </button>
  );
}
