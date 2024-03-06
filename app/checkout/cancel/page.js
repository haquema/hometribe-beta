import Link from "next/link";

export default function Cancel() {
  
  return (
    <h1>Payment was cancelled. No funds were debited from your account. Click <Link className="text-blue-600 font-semibold underline cursor-pointer" href='/'>here</Link> to return to the event page.</h1>
  )
}