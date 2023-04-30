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
      <div className="md:flex md:justify-around md:h-[5rem] grid place-content-center">
        <h1 className="md:text-[2rem] font-bold py-[2rem] text-[2rem]">
          ALL OUR PRODUCT
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
