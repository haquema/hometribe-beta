import { getServerSession } from 'next-auth';
import SignupForm from './form';

const SignupPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }

  return (
    <div className='flex justify-center relative h-dvh'>
      <div className='absolute top-20 flex flex-col justify-around items-stretch bg-white border border-slate-400 shadow-2xl rounded-lg h-100 w-100 px-6 row-start-2 row-span-1'>
        <h1 className="mt-4 font-medium text-xl self-center">Sign up for an account with HomeTribe</h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignupPage