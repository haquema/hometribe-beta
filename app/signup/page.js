import { getServerSession } from 'next-auth';
import SignupForm from './form';

const SignupPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }

  return (
    <div>
      <h1 className="py-4 text-xl font-semibold">Sign up for an account with LearnTribe</h1>
      <SignupForm />
    </div>
  )
}

export default SignupPage