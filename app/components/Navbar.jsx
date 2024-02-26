import { UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import NavbarMenu from "./NavbarMenu";
import { getServerSession } from 'next-auth';



export default async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="border w-dvs -mx-8 -mt-8 mb-4 bg-stone-200 p-4 flex items-center justify-between min-w-96 shadow-inner">
      <Link href='/' className='text-transparent bg-clip-text bg-gradient-to-l from-orange-600 via-red-900 to-black font-semibold text-2xl'>LearnTribe</Link>
      <div className='order-last flex justify-between items-center '>
        {/* <Link href='/tribes' className='border-2 border-transparent rounded-full py-2 px-3 hover:bg-slate-100'>
          <UserGroupIcon className='h-6'/>
        </Link>
        <Link href='/tribes/register' className='border-2 border-transparent rounded-full py-2 px-3 hover:bg-slate-100'>Register Your Tribe</Link> */}
        <NavbarMenu className='order-last' session={session}/>
      </div>
    </nav>
  )
}