import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white justify-around flex h-[3rem] drop-shadow-md sticky top-0 z-10">
      <div className="grid w-[80%]">
        <div className="flex justify-between">
          <div className="pt-[.7rem]">TokoKu</div>
          <div className="flex space-around space-x-4">
            <div className="flex space-x-6 pt-[.7rem]">
              <Link href="/">Home</Link>
              <Link href="/product">Product</Link>
            </div>
            <div className="grid place-content-center bg-green">
              <div className="bg-black px-[.7rem] py-[.1rem] rounded-full text-white text-[1rem] pt-[-.1rem]">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
