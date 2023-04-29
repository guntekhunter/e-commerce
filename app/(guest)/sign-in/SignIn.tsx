"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Dashboard from "@/app/component/Dashboard";
import Image from "next/image";
import google from "@/public/icon/google.png";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignIn = () => {
    if (session) {
      router.push("/dashboard");
    }
    signIn();
  };

  if (session) {
    return <Dashboard user={session?.user} />;
  } else {
    return (
      <div className="w-full flex justify-around">
        <div className="bg-white md:w-[30%] mt-[5rem] rounded-md flex justify-around md:p-[2rem] drop-shadow-lg w-[80%] py-[2rem]">
          <div className="block md:w-[90%] w-[90%] space-y-2">
            <div className="flex justify-around">
              <h1 className="text-[1.5rem] font-bold">Login</h1>
            </div>
            <div className="w-full flex justify-center py-[2rem]">
              <button
                onClick={handleSignIn}
                className="flex space-x-2 bg-black px-[.7rem] py-[.1rem] rounded-full text-white text-[1rem] pt-[-.1rem]"
              >
                <Image src={google} alt="" className="w-5 mt-[.1rem]" />
                <p>Login With Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
