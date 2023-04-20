"use client";
import { Token } from "@/typings";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginStatic() {
  const [login, setLogin] = useState();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: `username=${userName}&password=${password}`,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      });
      const result: Token = await res.json();
      return result;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  const handleLogin = async () => {
    const cobaDulu = await postLogin();
    const token = cobaDulu?.token;
    console.log(token);
    {
      if(token === undefined){
        console.log("guoblog")
      }else{
        router.push(`/dashboard/${token}`);
      }
    }
  };
  return (
    <div className="w-full flex justify-around">
      <div className="bg-white md:w-[30%] mt-[5rem] rounded-md flex justify-around md:p-[2rem] drop-shadow-lg w-[80%] py-[2rem]">
        <div className="block md:w-[90%] w-[90%] space-y-2">
          <div className="flex justify-around">
            <h1 className="text-[1.5rem] font-bold">Login</h1>
          </div>
          <div>
            <p className="font-bold">User Name</p>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="ommaleka"
              className="w-full border-gray-200 border-[.1rem] rounded-md px-2 mt-2"
            />
          </div>
          <div>
            <p className="font-bold">Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="ommaleka"
              className="w-full border-gray-200 border-[.1rem] rounded-md px-2 mt-2"
            />
          </div>
          <div className="flex justify-around w-full">
            <button
              className="w-[40%] bg-black text-white py-[.2rem] rounded-full mt-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
