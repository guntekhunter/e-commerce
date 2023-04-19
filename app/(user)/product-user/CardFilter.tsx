"use client";
import { RootState } from "@/app/GlobalRedux.tsx/store";
import { getData } from "@/app/utils/getData";
import { Products } from "@/typings";
import { stat } from "fs";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// @ts-ignore
export default function CardFilter({ datas }) {
  const filter = useSelector((state: RootState) => state.filter.value);
  const product = datas.filter((obj: { category: string }) =>
    filter.includes(obj.category)
  );
  const defaultData = datas;
  const data: Products[] = defaultData;
  const products: Products[] = product;
  if (products.length === 0) {
    return (
      <div className="grid grid-cols-4 gap-4 px-[8rem] mt-5">
        {data.map((data, key) => (
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
                  href={`/product-user/${data.id}`}
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
  } else {
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
                  href={`/product-user/${data.id}`}
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
}
