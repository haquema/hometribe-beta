import { getServerSession } from 'next-auth';
import SignupForm from './form';
import { redirect } from 'next/navigation';

const SignupPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }

  return (
    <div className='flex justify-center relative h-dvh'>
      <div className='absolute top-20 flex flex-col justify-center items-stretch bg-white border border-slate-400 shadow-2xl rounded-lg h-100 w-96 px-6 row-start-2 row-span-1'>
        <h1 className="font-semibold text-[20px] self-center mb-12">Sign up</h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignupPage