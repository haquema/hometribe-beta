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

  const fields = [
    { name: 'firstName', label: 'First Name:', type: 'text' },
    { name: 'lastName', label: 'Last Name:', type: 'text' },
    { name: 'email', label: 'Email:', type: 'email' },
    { name: 'password', label: 'Password:', type: 'password' },
  ]

  const buildForm = fields.map(field => 
    <div key={field.name} className='flex relative border border-stone-300 rounded-md h-12 mb-3'>
      <label htmlFor={field.name} className="absolute top-0 left-0 z-10 w-full pl-2 pt-1 h-7 font-light text-xs">{field.label}</label>
      <input id={field.name} name={field.name} type={field.type} className="absolute top-0 left-0 h-[46px] z-0 pt-3 w-full rounded-md indent-2 text-base bg-transparent focus:outline-orange-700"/>
    </div>  
  )
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-evenly" >
      {buildForm}
      <button className="self-center border bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-md text-white w-full py-2 mt-6 mb-12 shadow h-10 outline outline-transparent outline-1 hover:outline-red-700" type="submit">Signup</button>
      <p className='text-sm'>
        Already have an account? <Link href="/login" className='underline font-medium'>Login here</Link>
      </p>
    </form>
  )
}