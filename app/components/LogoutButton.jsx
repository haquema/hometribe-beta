'use client'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
import { toast } from 'sonner';


export default function LogoutButton({ classNames, text}) {
  const router = useRouter();
  
  const logout = () => {
    signOut();
    toast('Successfully logged out');
    router.push('/');
  }

  return (
    <>
      <button
        className={classNames}
        onClick={logout}
      >
        {text}
      </button>
    </>
  )
}