'use client'
import { signIn } from 'next-auth/react';
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
    <form onSubmit={handleSubmit} className="flex flex-col space-y-1" >
      <label>Email:
        <input className="border-2 rounded-md mx-2" type="text" name="email" />
      </label>
      <label>Password:
        <input className="border-2 rounded-md mx-2" type="text" name='password'/>
      </label>
      <button className="border-2 bg-blue-500 rounded-md text-white" type="submit">Login</button>
    </form>
  )
}