import React from "react";
import { Products } from "@/typings";
import Link from "next/link";


const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products[] = await res.json();
  return products;
};
export default async function Card() {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-4 gap-4 px-[8rem] mt-5">
      {products.map((data, key) => (
        <div
          key={key}
          className=" bg-white drop-shadow-lg rounded-lg pb-[2rem]"
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
              <Link href={`/product/${data.id}`} className="bg-black text-white px-[2rem] py-[.2rem] rounded-full">Detail</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
