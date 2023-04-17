import { Products } from "@/typings";
import Link from "next/link";
import { type } from "os";
import React from "react";

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
    <div className="w-full justify-around flex pt-[2rem] blok">
      <div className="w-[80%]">
        <h1 className="font-bold text-[2rem]">Product Detail</h1>
        <div className="mt-[2rem] bg-white p-[3rem] flex space-x-[4rem] drop-shadow-lg">
          <div className="justify-around overflow-hide ">
            <img src={product.image} alt="ini" className="w-[15rem]" />
          </div>
          <div className="w-full">
            <p className="font-bold text-[1.5rem] truncate ...">
              {product.title}
            </p>
            <p>{product.description}</p>
            <p className="text-[1.5rem] font-bold">${product.price}</p>

            <div className="mt-2 flex space-x-5">
              <Link href="/login">
              <button className="bg-black text-white px-[2rem] py-[.2rem] rounded-full">
                Login
              </button>
              </Link>
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
