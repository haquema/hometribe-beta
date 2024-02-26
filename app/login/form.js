'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (!response.error) {
      router.push('/')
      router.refresh()
    }
    
  };

  
  return (
    <div className='absolute top-20 flex flex-col justify-around items-stretch bg-white border border-slate-400 shadow-2xl rounded-lg h-100 w-100 px-6 row-start-2 row-span-1'>
      <h1 className='font-medium text-xl self-center'>Login here!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-20" >
        <div className='w-full h-14 border border-slate-500 rounded-t-md'>
          <label className='w-full font-light text-sm px-2' htmlFor='email'>Email:</label>
          <input className="rounded w-full h-8 bg-transparent pl-2" type="text" name="email" id='email'/>
        </div>
        <div className='flex flex-col w-full h-14 border border-t-0 border-slate-500 rounded-b-md'>
          <label className='w-full font-light text-sm px-2' htmlFor='password'>Password:</label>
          <input className="rounded h-8 w-full bg-transparent pl-2" type="password" name='password' id='password'/>
        </div>
        <button className="self-center border bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-md text-white w-full py-2 mt-6 shadow h-14" type="submit">Login</button>
      </form>
      <p className='text-sm'>
        Don&apos;t have an account? <Link href="/signup" className='underline font-medium'>Sign up here</Link>
      </p>
    </div>
  )
}