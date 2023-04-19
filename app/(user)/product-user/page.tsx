import React from "react";
// import ClientCard from "./ClientCard";
import { Products } from "@/typings";
import ClientCard from "./ClientCard";
import ClientFilterButton from "./ClientFilterButton";
import CardFilter from "./CardFilter";
import { getData } from "@/app/utils/getData";

export default async function Product() {
  const products = await getData();
  return (
    <div className="w-full block">
      <div className="flex justify-around h-[5rem] grid place-content-center">
        <h1 className="text-[2rem] font-bold">
          ALL OUR PRODUCT tapi sudah login
        </h1>
      </div>
      <ClientFilterButton />
      <br />
      <div className="">
        <ClientCard datas={products} />
      </div>
    </div>
  );
}
