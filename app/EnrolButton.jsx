'use client'
import { useRouter } from "next/navigation"
import { toast } from 'sonner';


export default function EnrolButton({ session, classNames, text}) {
  const router = useRouter();
  
  const handleClick = () => {
    if (session) {
      toast.success('Your space has been booked!')
    } else {
      toast.warning('You must login before you can book your space')
      router.push("/login")
    }
  }

  return (
    <>
      <button
        className={classNames}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  )
}