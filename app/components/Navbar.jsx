'use client'
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { callToast } from "@/lib/sonner";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function Navbar() {
  const {status} = useSession();
  const searchParams = useSearchParams();

  useEffect(() => {
    if(searchParams.get('logout') == 'true') {
      callToast('default', 'Logged out successfully!');
    } else if (searchParams.get('payment') == 'success') {
      callToast('success', "Payment was successful. Your space is confirmed")
    } else if (searchParams.get('payment') == 'cancel') {
      callToast('info', "Payment was cancelled. Please try again")
    }
  })

  const NavbarLink = ({ url, label }) => {
    return (
      <Link
        href={url}
        className={`font-medium bg-stone-300 text-stone-600 border-transparent rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm`}
      >
        {label}
      </Link>
    );
  };

  return (
    <Suspense>
      <nav className="border-none w-dvs -mx-8 -mt-8 mb-8 p-4 flex items-center justify-between shadow-inner">
        <Link href="/" className="text-black font-semibold text-xl">
          HomeTribe
        </Link>
          {status == 'unauthenticated' && <NavbarLink url="/login" label="Log In" />}
          {status == 'authenticated' && (
            <div className="flex space-x-8">
              <NavbarLink url="/profile" label="My Profile" />
              <LogoutButton
                classNames={"font-medium text-stone-600 border-transparent bg-stone-300 rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm"}
                text="Logout"
              />
            </div>
          )}
      </nav>
    </Suspense>
  );
}
