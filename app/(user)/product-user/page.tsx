import React from "react";
import ClientCard from "./ClientCard";
import { Products } from "@/typings";
import ClientFilterButton from "./ClientFilterButton";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products[] = await res.json();
  return products;
};
export default async function Product() {
  const products = await fetchProducts();
  return (
    <div className="w-full block">
      <div className="flex justify-around h-[5rem] grid place-content-center">
        <h1 className="text-[2rem] font-bold">
          ALL OUR PRODUCT tapi sudah login
        </h1>
      </div>
      <ClientFilterButton/>
      <br />
      <div className="">
        {/*@ts-ignore*/}
        <ClientCard datas={products} />
      </div>
    </div>
  );
}
