// import { getServerSession } from "next-auth";
// import LoginForm from "./form";
// import { redirect } from "next/navigation";

// export default async function LoginPage() {
//   const session = await getServerSession();
//   if (session) {
//     redirect('/')
//   }
//   return (
//     <div className="flex justify-center relative h-dvh">
//       <LoginForm />
//     </div>
//   )
// }

import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className='flex w-screen justify-center'>
      <form className='flex flex-col gap-2 py-2'>
        <div className='flex flex-col '>
          <label className='text-sm' htmlFor="email">Email:</label>
          <input className='border border-stone-300 rounded-md' id="email" name="email" type="email" required />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm' htmlFor="password">Password:</label>
          <input className='border border-stone-300 rounded-md' id="password" name="password" type="password" required />
        </div>
        <div className='flex space-x-2'>
          <button className='border bg-blue-500 text-white rounded-lg px-3 py-1' formAction={login}>Log in</button>
          <button className='border bg-green-500 text-white rounded-lg px-3 py-1' formAction={signup}>Sign up</button>
        </div>
      </form>
    </div>
  )
}