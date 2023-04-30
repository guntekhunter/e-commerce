import { Products } from "@/typings";
import React from "react";

// @ts-ignore
export default async function ServerCard({ id }) {
  return (
    <div className="grid grid-cols-4 gap-4 px-[8rem] mt-5">
      <div className="bg-white drop-shadow-lg rounded-lg pb-[2rem]">
        <div className="w-full h-[10rem] overflow-hidden grid place-content-center">
          <img src="{data.image}" alt="" className="w-[5rem]" />
        </div>
        <div className="px-[1.5rem]">
          <div className="">
            <p className="truncate ... font-bold">Ahhay</p>
            <p className="truncate ...">ITU</p>
            <p className="truncate ... font-bold">INI</p>
          </div>
          <div className="py-5">
            <button
              // href={`/product-user/${data.id}`}
              className="bg-black text-white px-[2rem] py-[.2rem] rounded-full"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
