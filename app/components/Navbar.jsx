import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import NavbarMenu from "./NavbarMenu"

export default function Navbar() {

  return (
    <nav className="py-6 flex items-center justify-between min-w-96">
      <Link href='/' className='font-semibold'>LearnTribe</Link>
      <div className='order-last flex justify-between items-center space-x-20'>
        <Link href='/tribes'>List Tribes</Link>
        <NavbarMenu className='order-last'/>
      </div>
    </nav>
  )
}