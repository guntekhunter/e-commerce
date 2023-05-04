"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import ServerCard from "./ServerCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux.tsx/store";
import { data } from "autoprefixer";
import { Products } from "@/typings";
import { remove } from "../GlobalRedux.tsx/Features/counter/counterSlice";
import Loading from "../product/loading";

// @ts-ignore
export default function Card({ datas }) {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);
  const product = datas.filter((obj: { id: number }) => count.includes(obj.id));
  const products: Products[] = product;

  const totalPrice = products.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const cancelChart = async (id: number) => {
    dispatch(remove(id));
  };
  return (
    <div className="w-full justify-around flex">
      <div className="grid md:grid-cols-3 w-[80%] gap-[2rem]">
        <div className="col-span-2">
          <Suspense fallback={<Loading/>}>
            <div className="grid grid-cols-1 gap-4">
              {products.map((data, key) => (
                <div
                  key={key}
                  className="bg-white drop-shadow-lg rounded-lg flex p-[2rem]"
                >
                  <div className="w-[10rem]">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="w-full overflow-hidden pl-[3rem] space-y-[1rem]">
                    <p className="truncate ... font-bold">{data.title}</p>
                    <p className="truncate ...">{data.description}</p>
                    <p className="truncate ... font-bold">Rp {data.price}</p>
                    <button
                      className="bg-black text-white px-[2rem] py-[.2rem] rounded-full"
                      onClick={() => cancelChart(data.id)}
                    >
                      cancel
                    </button>
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                <div className="bg-white drop-shadow-lg rounded-lg flex p-[2rem] flex justify-center">
                  No Product in Chart yet
                </div>
              )}
            </div>
          </Suspense>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg md:flex p-[2rem] h-[13rem] col-span-2 md:col-span-1">
          <div className="space-y-2">
            <p className="font-bold text-[1.5rem]">CHACKOUT</p>
            <p className="font-bold">Total Price : Rp {totalPrice}</p>
            <div className="py-5 w-full">
              <button className="bg-black text-white px-[2rem] py-[.2rem] rounded-full">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
