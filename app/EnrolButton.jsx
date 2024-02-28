'use client'
import { useRouter } from "next/navigation"
import { toast } from 'sonner';


export default function EnrolButton({ session, classNames, text}) {
  const router = useRouter();
  
  const handleClick = () => {
    if (session) {
      toast.success('Your space has been booked!')
      // router.push("/booked");
    } else {
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