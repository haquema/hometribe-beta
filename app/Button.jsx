'use client'
import { useRouter } from "next/navigation"


export default function Button({session, classNames, text}) {
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
        className={classNames}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  )
}