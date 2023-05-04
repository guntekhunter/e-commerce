"use client";
import React, { Suspense } from "react";
import { Products } from "@/typings";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux.tsx/store";
import Loading from "./loading";

// @ts-ignore
export default function Card({ datas }) {
  const filter = useSelector((state: RootState) => state.filter.value);
  const product = datas.filter((obj: { category: string }) =>
    filter.includes(obj.category)
  );
  const defaultData = datas;
  const data: Products[] = defaultData;
  const products: Products[] = product;

  console.log(data.length);
  if (products.length === 0) {
    return (
      <div className="grid md:grid-cols-4 md:px-[8rem] px-[2rem] gap-4 mt-5 grid-cols-2">
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
                  href={`/product/${data.id}`}
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
      <div className="grid md:grid-cols-4 md:px-[8rem] px-[2rem] gap-4 mt-5 grid-cols-2">
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
