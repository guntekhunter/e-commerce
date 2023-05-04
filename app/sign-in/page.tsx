import React, { Suspense } from "react";
import ClientSignIn from "./ClientSignIn";
import Loading from "../product/loading";

export default function Login() {
  return (
    <main className="w-full">
      <Suspense fallback={<Loading />}>
        <ClientSignIn />
      </Suspense>
    </main>
  );
}
