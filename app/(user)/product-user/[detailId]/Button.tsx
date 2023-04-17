"use client";
import { Chart } from "@/typings";
import { Result } from "postcss";
import React, { useState } from "react";
import globalChart from "../../../GlobalChart";

// @ts-ignore
export default function Button({ id }) {
  const [data, setData] = useState();

  const handleAddChart = async () => {
    console.log("ahhay", id);
    if(!globalChart.includes(id)){
      globalChart.push(id);
    }
    console.log(globalChart);
  };
  return (
    <button
      className="bg-black text-white px-[2rem] py-[.2rem] rounded-full"
      onClick={handleAddChart}
    >
      uhhuy
    </button>
  );
}
