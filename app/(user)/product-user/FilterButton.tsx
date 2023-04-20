"use client";
import { filter } from "@/app/GlobalRedux.tsx/Features/filter/filterSlice";
import { RootState } from "@/app/GlobalRedux.tsx/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FilterButton() {
  const count = useSelector((state: RootState) => state.filter.value);
  const dispatch = useDispatch();

  const handleFilter = async (e: any) => {
    dispatch(filter(e.target.value));
  };
  return (
    <div className="md:flex md:justify-around px-[2rem]">
      <div className="md:w-[80%] md:flex md:space-x-2 grid grid-cols-2 gap-4">
        <button
          onClick={handleFilter}
          value="men's clothing"
          className="px-10 py-1 rounded-full bg-white drop-shadow-lg "
        >
          Man
        </button>
        <button
          onClick={handleFilter}
          value="jewelery"
          className="px-10 py-1 rounded-full bg-white drop-shadow-lg "
        >
          Jewelery
        </button>
        <button
          onClick={handleFilter}
          value="electronics"
          className="px-10 py-1 rounded-full bg-white drop-shadow-lg "
        >
          Electronics
        </button>
        <button
          onClick={handleFilter}
          value="women's clothing"
          className="px-10 py-1 rounded-full bg-white drop-shadow-lg "
        >
          Woman
        </button>
        <button
          onClick={handleFilter}
          value=""
          className="px-10 py-1 rounded-full bg-white drop-shadow-lg "
        >
          All
        </button>
      </div>
    </div>
  );
}
