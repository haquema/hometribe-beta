import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProfileForm from "./form";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession();

  if (!session) {
    redirect('/')
  }

  console.log("profile session object", session);

  const userData = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  console.log("profile userData console.log", userData.id);

  return (
    <div>
      <h1></h1>
      <ProfileForm userData={userData} />
    </div>
  );
}
