import { Products } from "@/typings";
import { type } from "os";
import React from "react";
import Product from "../page";
import ServerComponent from "./ServerComponent";
import globalChart from "@/app/GlobalChart";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ClientButton from "./ClientButton";

export const dynamicParams = true;

type PageProps = {
  params: {
    detailId: string;
  };
};

// fetching detail data from api
const fetchProduct = async (detailId: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${detailId}`, {
    next: { revalidate: 60 },
  });

  const product: Products = await res.json();
  return product;
};

export default async function Detail({ params: { detailId } }: PageProps) {
  const product = await fetchProduct(detailId);

  return (
    <div className="w-full flex justify-around">
      <div className="w-[80%]">
        <div className="w-full flex justify-around mt-2">
          <h1 className="font-bold text-[2rem]">PRODUCT DETAIL</h1>
        </div>
        <div className="bg-white mt-4 drop-shadow-lg rounded-lg md:flex md:space-x-[4rem] md:pr-[5rem] md:py-[2rem]">
          <div className="p-[4rem] md:py-[1rem] md:p-[2rem] md:py-[2rem] md:pl-[4rem]">
            <img src={product.image} alt="" />
          </div>
          <div className="px-6 pb-6 md:px-2 md:py-5">
            <p className="font-bold text-[1.5rem] truncate ...">
              {product.title}
            </p>
            <p>{product.description}</p>
            <p className="text-[1.5rem] font-bold">${product.price}</p>
            <div className="mt-2 flex space-x-5">
              <ClientButton id={product.id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const products: Products[] = await res.json();

  // membatasi render hanya 10 respon dari API
  const trimmedProducts = products.splice(0, 10);

  return trimmedProducts.map((data) => ({
    detailId: data.id.toString(),
  }));
}
