import React from "react";
import Card from "./Card";
import { getData } from "@/app/utils/getData";
import ClientCard from "./ClientCard";
import ClientFilterButton from "../(user)/product-user/ClientFilterButton";

export default async function Product() {
  const products = await getData();
  return (
    <div className="w-full block">
      <div className="flex justify-around h-[5rem] grid place-content-center">
        <h1 className="text-[2rem] font-bold">ALL OUR PRODUCT</h1>
      </div>
      <ClientFilterButton />
      <div className="">
        {/*@ts-ignore*/}
        <ClientCard datas={products}/>
      </div>
    </div>
  );
}
