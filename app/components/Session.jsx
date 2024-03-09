'use client'

import { SessionProvider } from "next-auth/react";

export default function Session({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}