'use client'
import { userSignupSchema } from "../validations/authValidation";

export default function SignupForm() {
  
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
      console.log(parsedResponse);
    } else {
      console.log("details not input correctly")
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-around mt-12" >
      <label className="w-full h-14 border border-slate-500 rounded-t-md relative font-light text-xs pl-2 pt-1">First Name:
        <input className="absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" type="text" name="firstName" />
      </label>
      <label className="w-full h-14 border border-t-0 border-slate-500 relative font-light text-xs pl-2 pt-1">Last Name:
        <input className="absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" type="text" name='lastName'/>
      </label>
      <label className="w-full h-14 border border-t-0 border-slate-500 relative font-light text-xs pl-2 pt-1">Email Address:
        <input type="text" className="absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" name='email'/>
      </label>
      <label className="w-full h-14 border rounded-b-md border-t-0 border-slate-500 relative font-light text-xs pl-2 pt-1 mb-4">Password:
        <input type="password" className="absolute inset-x-0 bottom-0 rounded w-full h-2/3 bg-transparent pl-2 font-normal text-base" name='password'/>
      </label>
      <button className="mb-12 self-center border bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-md text-white w-full py-2 mt-6 shadow h-14" type="submit">Signup</button>
    </form>
  )
}