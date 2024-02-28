'use client'
import { UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const NavbarMenu = ({ session }) => {
  const router = useRouter();

  return (
      <div>
        <Menu>
          <Menu.Button>
            <div className='text-stone-600 border-transparent bg-stone-300 rounded-full p-1 px-3 ml-2 flex flex-row space-x-2 hover:shadow-xl hover:bg-stone-400 hover:text-white text-sm'>
              {/* <Bars3Icon className="h-6 text-stone-600" />
              <UserCircleIcon className="h-6 text-stone-600" /> */}
              Sign In
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
          <Menu.Items className="z-50 absolute right-5 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              {!session && <Menu.Item>
              {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-red-600 text-white' : 'text-gray-900'
                    } group flex w-full item-center place-content-center rounded-md px-2 py-2 text-xs`}
                    href="/login"
                  >
                    Login
                  </a>
                )}
              </Menu.Item>}
              {!session && <Menu.Item>
              {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-red-600 text-white' : 'text-gray-900'
                    } group flex w-full items-center place-content-center rounded-lg px-2 py-2 text-xs`}
                    href="/signup"
                  >
                    Signup
                  </a>
                )}
              </Menu.Item>}
              {!!session && <Menu.Item>
                {({ active }) => (
                  <button className={`${
                    active ? 'bg-red-600 text-white' : 'text-gray-900'
                  } group flex w-full items-center place-content-center rounded-lg px-2 py-2 text-xs`}
                    onClick={() => {
                      signOut();
                      console.log("successfully logged out");
                      router.push('/');
                    }}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>}
            </div>
          </Menu.Items>
          </Transition>
        </Menu>
      </div>
  )
}

export default NavbarMenu