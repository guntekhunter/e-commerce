"use client";
import Link from "next/link";
import React from "react";
import ServerCard from "./ServerCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux.tsx/store";
import { data } from "autoprefixer";
import { Products } from "@/typings";

// @ts-ignore
export default function Card({ datas }) {
  const count = useSelector((state: RootState) => state.counter.value);
  const product = datas.filter((obj: { id: number }) => count.includes(obj.id));
  const products: Products[] = product;
  return (
    
    <div className="grid grid-cols-4 gap-4 px-[8rem] mt-5">
      {products.map((data, key) => (
        <div
          key={key}
          className="bg-white drop-shadow-lg rounded-lg pb-[2rem]"
        >
          <div className="w-full h-[10rem] overflow-hidden grid place-content-center">
            <img src={data.image} alt="" className="w-[5rem]" />
          </div>
          <div className="px-[1.5rem]">
            <div className="">
              <p className="truncate ... font-bold">{data.title}</p>
              <p className="truncate ...">{data.description}</p>
              <p className="truncate ... font-bold">${data.price}</p>
            </div>
            <div className="py-5">
              <Link
                href={`/chart/${data.id}`}
                className="bg-black text-white px-[2rem] py-[.2rem] rounded-full"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
