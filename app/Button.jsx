'use client'
import { useRouter } from "next/navigation"


export default function Button({session}) {
  const router = useRouter();
  
  const handleClick = () => {
    if (session) {
      router.push("/booked");
    } else {
      router.push("/login")
    }
  }

  return (
    <>
      <button
        className='bg-red-500 py-2 px-6 rounded-md text-white border-2'
        onClick={handleClick}
      >
        Book your space
      </button>
    </>
  )
}