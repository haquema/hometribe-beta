import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/bcrypt";

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: await hashPassword(password),
      },
    })

    console.log(newUser);

  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success"});
}