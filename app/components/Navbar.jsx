import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession();

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
    <nav className="border-none w-dvs -mx-8 -mt-8 mb-8 p-4 flex items-center justify-between shadow-inner">
      <Link
        href="/"
        className="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 via-red-900 to-black font-semibold text-xl"
      >
        HomeTribe
      </Link>
      <div className="flex space-x-8">
        {/* need to work on the actual link url later */}
        <NavbarLink url="/profile" label="My Profile" />
        {!session && <NavbarLink url="/login" label="Log In" />}
        {!!session && (
          <LogoutButton
            classNames={
              "font-medium text-stone-600 border-transparent bg-stone-300 rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm"
            }
            text="Logout"
          />
        )}
      </div>
    </nav>
  );
}
