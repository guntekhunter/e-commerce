import Card from "@/app/(user)/chart/Card";
import React from "react";
import ClientCard from "./ClientCard";
import { Products } from "@/typings";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products[] = await res.json();
  return products;
};
export default async function Chart() {
  const products = await fetchProducts();
  return (
    <div className="w-full block">
      <div className="flex justify-around h-[5rem] grid place-content-center">
        <h1 className="text-[2rem] font-bold">Chart</h1>
      </div>
      <div className="">
        {/*@ts-ignore*/}
        <ClientCard datas={products}/>
      </div>
    </div>
  );
}
