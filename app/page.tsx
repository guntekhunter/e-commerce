import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header className="w-full bg-white justify-around flex h-[3rem] drop-shadow-md sticky top-0">
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
      <main className="w-full h-[70vh] grid place-content-center">
        <div className="grid space-y-3">
          <div>
            <img src="" alt="" />
          </div>
          <div className="grid place-content-center">
            <div>Ini Home loh</div>
          </div>
          <Link
            href="/product"
            className="bg-black text-white px-[1rem] rounded-full"
          >
            PRODUCT
          </Link>
        </div>
      </main>
    </div>
  );
}
