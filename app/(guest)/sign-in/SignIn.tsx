"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Dashboard from "@/app/component/dashboard";

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
    return <Dashboard user={session?.user}/>;
  } else {
    return (
      <>
        <button type="button" className="bg-red-200" onClick={handleSignIn}>
          Sign in with Google
        </button>
      </>
    );
  }
}
