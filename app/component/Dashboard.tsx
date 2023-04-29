import Link from 'next/link';
import React from 'react';
import {DefaultSession} from "next-auth"

export default function Dashboard({user}:{user: DefaultSession["user"]}) {
    console.log(user?.name)
  return (
    <main className="w-full h-[70vh] grid place-content-center">
      <div className="grid space-y-3">
        <div>
          <img src="" alt="" />
        </div>
        <div className="grid place-content-center">
          <div>Selamat datang {user?.name}</div>
        </div>
        <div className="flex justify-around">
          <Link
            href="/product-user"
            className="bg-black text-white px-[1rem] rounded-full"
          >
            PRODUCT
          </Link>
        </div>
      </div>
    </main>
  )
}
