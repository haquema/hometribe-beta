import { getServerSession } from 'next-auth';
import SignupForm from './form';

const SignupPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }

  return (
    <div className='grid grid-rows-8 justify-center h-dvh'>
      <div className='flex flex-col justify-around items-stretch bg-white border border-slate-400 shadow-2xl rounded-lg h-100 w-100 px-6 row-start-2 row-span-1'>
        <h1 className="mt-6 font-medium text-lg self-center">Sign up for an account with LearnTribe</h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignupPage