"use client";
import Link from "next/link";
import React from "react";
import ServerComponent from "./ServerComponent";
import { useSession } from "next-auth/react";

// @ts-ignore
export default function ConditionalButton({ id }) {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div className="flex space-x-5">
          <button className="bg-black text-white px-[2rem] py-[.2rem] rounded-full">
            Buy
          </button>
          {/* @ts-ignore */}
          <ServerComponent id={id} />
        </div>
      ) : (
        <div>
          <Link
            href="/login"
            className="bg-black text-white px-[2rem] py-[.2rem] rounded-full"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
