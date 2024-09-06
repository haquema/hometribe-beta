'use client'
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";
import { useEffect, Suspense } from "react";
import { callToast } from "@/lib/sonner";
import { useSearchParams } from "next/navigation";
import Logo from '../../public/logo.png';



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

const Notifications = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if(searchParams.get('logout') == 'true') {
      callToast('default', 'Logged out successfully!');
      console.log('useEffect ran');
    } else if (searchParams.get('payment') == 'success') {
      callToast('success', "Payment was successful. Your space is confirmed")
      console.log('useEffect ran');
    } else if (searchParams.get('payment') == 'cancel') {
      callToast('info', "Payment was cancelled. Please try again")
      console.log('useEffect ran');
    }
  })

  return (
    <></>
  )
}

export default function Navbar() {
  const {status} = useSession();

  return (
    <nav className=" w-full p-4 sticky top-0 backdrop-blur-sm bg-white flex items-center justify-between">
      <Link href="/">
        <Image className="w-32" src={Logo} alt='Logo' width={150} />
      </Link>
      <Suspense>
        <Notifications />
      </Suspense>
      {/* {status == 'unauthenticated' && <NavbarLink url="/login" label="Log In" />} */}
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
  );
}
