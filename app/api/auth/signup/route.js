import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/bcrypt";

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    
    const emailTaken = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    console.log(emailTaken)

    if (emailTaken) {
      return NextResponse.json({ message: "email taken"});
    } else {
      const newUser = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: await hashPassword(password),
        },
      })
      // console.log(newUser)
      return NextResponse.json({ message: "success"});
    }
  } catch (err) {
    return NextResponse.json({ message: "fail", error: {err} });
  }
}