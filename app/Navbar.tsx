"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "./GlobalRedux.tsx/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Hamburger from "@/public/icon/menu.png";
import Close from "@/public/icon/close.png";

export default function Navbar() {
  const [navbarShow, setNavbarShow] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const count = useSelector((state: RootState) => state.counter.value);
  const handleSignOut = () => {
    Cookies.remove("loggedin");
    signOut();
  };
  const showNavbar = () => {
    setNavbarShow(true);
  };
  const hideNavbar = () => {
    setNavbarShow(false);
  };
  if (session) {
    return (
      <header className="w-full bg-white justify-around flex h-[3rem] drop-shadow-md sticky top-0 z-10">
        <div className="grid w-[80%]">
          <div className="flex justify-between">
            <div className="pt-[.7rem]">TokoKu</div>
            <div className="pt-3 md:hidden">
              <Image
                src={Hamburger}
                alt={""}
                className="w-[1.5rem]"
                onClick={showNavbar}
              />
            </div>
            <div
              className={`md:flex space-around space-x-4 space-x-4 absolute md:static bg-white drop-shadow-md right-0 block h-[100vh] md:h-full pl-[5rem] pr-[5rem] md:pl-0 md:pr-0 py-[2rem] md:py-0 md:drop-shadow-none duration-500 ${
                navbarShow ? "" : "right-[-20rem]"
              }`}
            >
              <div className="md:flex md:space-x-6 md:pt-[.7rem] block space-y-2 md:space-y-0">
                <div className="grid place-content-center md:flex">
                  <Link href="/product">Product</Link>
                </div>
                <div className="grid place-content-center md:flex">
                  <div className="flex">
                    <Link href="/chart">Chart</Link>
                    {count.length !== 0 && (
                      <div className="bg-black w-[1rem] h-[1rem] bg-black rounded-full text-white flex items-center justify-center pt-[1rem]">
                        <p className="text-[.5rem] mt-[-1rem] text-white">
                          {count.length}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid place-content-center mt-3 md:mt-0">
                <div className="bg-black px-[.7rem] py-[.1rem] rounded-full text-white text-[1rem] md:pt-[-.1rem] md:mr-0 mr-[1rem]">
                  <button onClick={handleSignOut}>LogOut</button>
                </div>
              </div>
              <div className="pt-3 md:hidden grid place-content-center pr-[1rem]">
                <Image
                  src={Close}
                  alt={""}
                  className="w-[1rem]"
                  onClick={hideNavbar}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="w-full bg-white justify-around flex h-[3rem] drop-shadow-md sticky top-0 z-10">
        <div className="grid w-[80%]">
          <div className="flex justify-between">
            <div className="pt-[.7rem]">TokoKu</div>
            <div className="pt-3 md:hidden">
              <Image
                src={Hamburger}
                alt={""}
                className="w-[1.5rem]"
                onClick={showNavbar}
              />
            </div>
            <div
              className={`md:flex md:space-around space-x-4 absolute md:static bg-white drop-shadow-md right-0 block h-[100vh] md:h-full pl-[5rem] pr-[5rem] md:pl-0 md:pr-0 py-[2rem] md:py-0 md:drop-shadow-none duration-500 ${
                navbarShow ? "" : "right-[-20rem]"
              }`}
            >
              <div className="md:flex md:space-x-6 md:pt-[.7rem] block space-y-2 md:space-y-0">
                <div className="grid place-content-center md:flex">
                  <Link href="/">Home</Link>
                </div>
                <div className="grid place-content-center md:flex">
                  <Link href="/product">Product</Link>
                </div>
              </div>
              <div className="grid place-content-center mt-3 md:mt-0">
                <div className="bg-black px-[.7rem] py-[.1rem] rounded-full text-white text-[1rem] md:pt-[-.1rem] md:mr-0 mr-[1rem]">
                  <Link href="/sign-in">Login</Link>
                </div>
              </div>
              <div className="pt-3 md:hidden grid place-content-center pr-[1rem]">
                <Image
                  src={Close}
                  alt={""}
                  className="w-[1rem]"
                  onClick={hideNavbar}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
