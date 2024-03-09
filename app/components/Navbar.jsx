import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="border-none w-dvs -mx-8 -mt-8 mb-8 p-4 flex items-center justify-between shadow-inner">
      <Link
        href="/"
        className="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 via-red-900 to-black font-semibold text-xl"
      >
        HomeTribe
      </Link>
      {!session && (
        <button className="font-medium text-stone-600 border-transparent bg-stone-300 rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm">
          <Link href="/login">Sign In</Link>
        </button>
      )}
      <button className="font-medium text-stone-600 border-transparent bg-stone-300 rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm">
        <Link href="/profile">Profile</Link>
      </button>
      {!!session && (
        <LogoutButton
          classNames={
            "font-medium text-stone-600 border-transparent bg-stone-300 rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm"
          }
          text="Logout"
        />
      )}
    </nav>
  );
}
