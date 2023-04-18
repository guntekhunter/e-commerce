"use client";
import React from "react";
import globalChart from "../GlobalChart";
import Link from "next/link";
import type { RootState } from "@/app/GlobalRedux.tsx/store";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <header className="w-full bg-white justify-around flex h-[3rem] drop-shadow-md sticky top-0">
      <div className="grid w-[80%]">
        <div className="flex justify-between">
          <div className="pt-[.7rem]">TokoKu</div>
          <div className="flex space-around space-x-4">
            <div className="flex space-x-6 pt-[.7rem]">
              <Link href="/">Home</Link>
              <Link href="/product-user">Product</Link>
              <div className="flex">
                <Link href="/chart">Chart</Link>
                {count.length !== 0 && (
                  <div className="bg-black w-[1rem] h-[1rem] bg-black rounded-full text-white flex items-center justify-center pt-[1rem]">
                    <p className="text-[.5rem] mt-[-1rem] text-white">
                      {count.length}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid place-content-center bg-green">
              <div className="bg-black px-[.7rem] py-[.1rem] rounded-full text-white text-[1rem] pt-[-.1rem]">
                <Link href="/">LogOut</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
