import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProfileForm from "./form";

export default async function Profile() {
  const session = await getServerSession();
  console.log(session);

  const userData = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  console.log(userData);

  return (
    <div>
      <h1></h1>
      <ProfileForm userData={userData} />
    </div>
  );
}
