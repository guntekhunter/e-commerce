import React from "react";
import Card from "./Card";

export default function Product() {
  return (
    <div className="w-full block">
      <div className="flex justify-around h-[5rem] grid place-content-center">
        <h1 className="text-[2rem] font-bold">ALL OUR PRODUCT tapi sudah login</h1>
      </div>
      <div className="">
        {/*@ts-ignore*/}
        <Card />
      </div>
    </div>
  );
}
