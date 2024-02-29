import prisma from "@/lib/prisma";

export default async function userExists(email) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  return (user ? true : false);
}