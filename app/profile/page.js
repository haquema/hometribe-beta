import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import ProfileForm from "./form";
import { redirect } from "next/navigation";
import Link from "next/link";
import AddChildrenForm from "./addChildren";

export default async function Profile() {
  const session = await getServerSession();

  if (!session) {
    redirect('/')
  }

  // console.log("profile session object", session);

  const userData = await prisma.users.findUnique({
    where: {
      email: session.user.email,
    },
  });

  // console.log("profile userData console.log", userData.id);

  return (
    <div className="bg-transparent">
      <ProfileForm userData={userData} />
      {/* <AddChildrenForm parentId={userData.id} /> */}
    </div>
  );
}
