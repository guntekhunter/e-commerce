import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-[70vh] grid place-content-center">
      <div className="grid space-y-3">
        <div>
          <img src="" alt="" />
        </div>
        <div className="grid place-content-center">
          <div>Ini Home loh</div>
        </div>
        <Link href="/product" className="bg-black text-white px-[1rem] rounded-full">PRODUCT</Link>
      </div>
    </main>
  );
}
