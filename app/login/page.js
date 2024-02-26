import { getServerSession } from "next-auth";
import LoginForm from "./form";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }
  return (
    <div className="grid grid-rows-8 justify-center h-dvh">
      <LoginForm />
    </div>
  )
}