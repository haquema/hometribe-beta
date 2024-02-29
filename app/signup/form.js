'use client'
import { userSignupSchema } from "../validations/authValidation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function SignupForm() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault()
     
    let formData = new FormData(event.currentTarget)
    let inputs = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    }
    
    const isValid = await userSignupSchema.isValid(inputs);
    if (isValid) {
      const response = await fetch(`/api/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(inputs),
      })

      let parsedResponse = await response.json();
      if (parsedResponse.message == 'success') {
        toast.success('Signup successful');
        router.push('/login');
      } else if (parsedResponse.message == 'email taken') {
        toast.error('That email is already associated to an account');
      }
    } else {
      toast.error('Signup unsuccessful due to input error')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-around" >
      <label className="w-full h-10 border border-stone-300 rounded-md relative font-light text-xs pl-2 pt-1 mb-3">First Name:
        <input className="focus:outline-none absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" type="text" name="firstName" />
      </label>
      <label className="w-full h-10 border border-stone-300 rounded-md relative font-light text-xs pl-2 pt-1 mb-3">Last Name:
        <input className="focus:outline-none absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" type="text" name='lastName'/>
      </label>
      <label className="w-full h-10 border border-stone-300 rounded-md relative font-light text-xs pl-2 pt-1 mb-3">Email Address:
        <input type="text" className="focus:outline-none absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" name='email'/>
      </label>
      <label className="w-full h-10 border border-stone-300 rounded-md relative font-light text-xs pl-2 pt-1 mb-3">Password:
        <input type="password" className="focus:outline-none absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" name='password'/>
      </label>
      <button className="self-center border bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-md text-white w-full py-2 mt-6 mb-12 shadow h-10" type="submit">Signup</button>
      <p className='text-sm'>
        Already have an account? <Link href="/login" className='underline font-medium'>Login here</Link>
      </p>
    </form>
  )
}