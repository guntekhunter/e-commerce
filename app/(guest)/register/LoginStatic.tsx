"use client";
import { Token } from "@/typings";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginStatic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-around">
      <div className="bg-white md:w-[30%] mt-[5rem] rounded-md flex justify-around md:p-[2rem] drop-shadow-lg w-[80%] py-[2rem]">
        <form className="block md:w-[90%] w-[90%] space-y-2">
          <div className="flex justify-around">
            <h1 className="text-[1.5rem] font-bold">Login</h1>
          </div>
          <div>
            <p className="font-bold">User Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="ommaleka"
              className="w-full border-gray-200 border-[.1rem] rounded-md px-2 mt-2"
            />
          </div>
          <div>
            <p className="font-bold">User Name</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="submit"
              onClick={handleRegister}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
