"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux.tsx/store";
import Image from "next/image";
import Checklist from "@/public/icon/checklist.png";
import {hide} from "../GlobalRedux.tsx/Features/modal/modalSlice"

export default function Modal() {
    const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.value);
  console.log(modal);

  const hideCheckOut = async () => {
    dispatch(hide(false));
  }
  return (
    <div
      className={`absolute w-full justify-around flex x-50 ${
        !modal ? "hidden" : ""
      }`}
    >
      <div className="z-10 w-full justify-around flex">
        <div className="w-[80%] flex justify-around mt-[3rem] z-10">
          <div className="md:w-[40%] px-[3rem] py-[2rem] flex justify-around bg-white drop-shadow-md rounded-md">
            <div>
              <p className="font-bold flex justify-center text-[1.5rem] text-center">
                CHECKOUT SUCCESS
              </p>
              <div className="flex justify-around">
                <Image src={Checklist} alt="" className="w-[10rem] mt-5" />
              </div>
              <div className="flex justify-around pt-5">
                <button className="bg-black text-white px-6 py-3 rounded-full" onClick={hideCheckOut}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
