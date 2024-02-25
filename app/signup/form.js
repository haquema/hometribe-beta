'use client'

export default function SignupForm() {
  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch(`/api/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    console.log({ response });
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-1" >
      <label>First Name:
        <input className="border-2 rounded-md mx-2" type="text" name="firstName" />
      </label>
      <label>Last Name:
        <input className="border-2 rounded-md mx-2" type="text" name='lastName'/>
      </label>
      <label>Email Address:
        <input type="text" className="border-2 rounded-md mx-2" name='email'/>
      </label>
      <label>Password:
        <input type="password" className="border-2 rounded-md mx-2" name='password'/>
      </label>
      <button className="border-2 bg-blue-300 rounded-md" type="submit">Signup</button>
    </form>
  )
}