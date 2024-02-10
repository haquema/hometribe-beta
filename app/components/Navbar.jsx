import { UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import NavbarMenu from "./NavbarMenu"

export default function Navbar() {

  return (
    <nav className="py-6 flex items-center justify-between min-w-96">
      <Link href='/' className='font-semibold'>LearnTribe</Link>
      <div className='order-last flex justify-between items-center '>
        <Link href='/tribes' className='border-2 border-transparent rounded-full py-2 px-3 hover:bg-slate-100'>
          <UserGroupIcon className='h-6'/>
        </Link>
        <Link href='/tribes/register' className='border-2 border-transparent rounded-full py-2 px-3 hover:bg-slate-100'>Register Your Tribe</Link>
        <NavbarMenu className='order-last'/>
      </div>
    </nav>
  )
}