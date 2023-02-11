"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37f] h-screen flex flex-col items-center justify-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl border rounded-lg px-5 py-2 hover:text-white/50 transition-all ease-out"
      >
        Sign In to ChatGPT
      </button>
    </div>
  );
};

export default Login;
