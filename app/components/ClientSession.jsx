'use client'

import { useSession } from "next-auth/react";

export default function ClientSession({session}) {
  const clientSession = useSession();
  console.log('this is the client side session', clientSession);
  console.log('this is the serverside session',session);

  return <></>
}