import { Products } from "@/typings";

export const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Products[] = await res.json();
  console.log("ommaleka")
  return products;

};
