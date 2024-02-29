'use client'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
import { toast } from 'sonner';


export default function LogoutButton({ classNames, text}) {
  const router = useRouter();
  
  const logout = () => {
    signOut({redirect: false});
    toast('Successfully logged out');
    setTimeout(() => {
      router.refresh();
    }, 500)
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