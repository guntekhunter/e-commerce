"use client"
import React from "react";

export default function LoginStatic() {
  const handleLogin = () => {
    const res = fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    })

    console.log(res);
  };
  return (
    <div className="w-full flex justify-around">
      <div className="bg-white w-[40%] mt-[5rem] rounded-md flex justify-around p-[2rem] drop-shadow-lg">
        <div className="block w-[80%] space-y-2">
          <div className="flex justify-around">
            <h1 className="text-[1.5rem] font-bold">Login</h1>
          </div>
          <div>
            <p className="font-bold">User Name</p>
            <input
              type="text"
              placeholder="ommaleka"
              className="w-full border-gray-200 border-[.1rem] rounded-md px-2 mt-2"
            />
          </div>
          <div>
            <p className="font-bold">Password</p>
            <input
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
