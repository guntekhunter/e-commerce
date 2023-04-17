"use client";
import { Chart } from "@/typings";
import { Result } from "postcss";
import React, { useState } from "react";
import globalChart from "../../../GlobalChart";

// redux global component
import type { RootState } from "@/app/GlobalRedux.tsx/store";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from '../../../GlobalRedux.tsx/Features/counter/counterSlice';


// @ts-ignore
export default function Button({ id }) {
  // redux
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  const handleAddChart = async () => {
    dispatch(increment())
    // console.log("ahhay", id);
    // if(!globalChart.includes(id)){
    //   globalChart.push(id);
    // }
    // console.log(globalChart);
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
