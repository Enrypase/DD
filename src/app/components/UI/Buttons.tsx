"use client";

import { signIn } from "next-auth/react";
import React from "react";

type SizeType = "sm" | "md" | "lg";

const COMMON = "flex gap-2 items-center justify-center rounded-full px-2 py-1";

function SizedText(props: {
  size: SizeType;
  className: string;
  children: string;
}) {
  return props.size === "sm" ? (
    <p className={`${props.className} p-1`}>{props.children}</p>
  ) : props.size === "md" ? (
    <h6 className={`${props.className} p-2`}>{props.children}</h6>
  ) : (
    <h3 className={`${props.className} p-3`}>{props.children}</h3>
  );
}
export function GoogleSignIn(props: { size: SizeType }) {
  return (
    <button
      className={`${COMMON} text-black bg-white`}
      onClick={() => signIn("google")}
    >
      <SizedText size={props.size} className='text-gray-600 font-semibold'>
        Sign in with Google
      </SizedText>
      <img src='/icons/google.svg' alt='Google' />
    </button>
  );
}
