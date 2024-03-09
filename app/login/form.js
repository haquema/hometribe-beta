'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { userLoginSchema } from '../validations/authValidation';
import { toast } from 'sonner';

export default function LoginForm() {
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const inputs = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    const isValid = await userLoginSchema.isValid(inputs);
    if (isValid) {
      const response = await signIn('credentials', {
        email: inputs.email,
        password: inputs.password,
        redirect: false,
      });

      if (!response.error) {
        toast.success('Successfully logged in!')
        router.push('/')
        router.refresh()
      } else {
        toast.error('email or password is incorrect');
        router.refresh();
      }
    } else {
      toast.error("email or password is incorrect!")
    }
  };

  
  return (
    <div className='absolute top-20 flex flex-col justify-between items-stretch bg-white border border-stone-300 shadow-2xl shadow-stone-500 rounded-lg h-96 w-96 px-6 py-6 row-start-2 row-span-1'>
      <h1 className='font-semibold text-[20px] self-center'>Login here</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly" >
        <div className='flex relative border border-stone-300 rounded-md h-12 mb-3'>
          <label htmlFor='email' className="absolute top-0 left-0 z-10 w-full pl-2 pt-1 h-7 font-light text-xs">Email Address:</label>
          <input id='email' name='email' type="email" className="absolute top-0 left-0 h-[46px] z-0 pt-3 w-full rounded-md indent-2 text-base bg-transparent focus:outline-orange-700"/>
        </div>
        <div className='flex relative border border-stone-300 rounded-md h-12'>
          <label htmlFor='password' className="absolute top-0 left-0 z-10 w-full pl-2 pt-1 h-7 font-light text-xs">Password:</label>
          <input id='password' name='password' type="password" className="absolute top-0 left-0 h-[46px] z-0 pt-3 w-full rounded-md indent-2 text-base bg-transparent focus:outline-orange-700"/>
        </div>
        <button className="self-center border bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-md text-white w-full py-2 mt-6 shadow h-10 outline outline-transparent outline-1 hover:outline-red-700" type="submit">Login</button>
      </form>
      <p className='text-sm'>
        Don&apos;t have an account? <Link href="/signup" className='underline font-medium'>Sign up here</Link>
      </p>
    </div>
  )
}