import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const { firstName, lastName, email } = await request.json();

    const updatedUser = await prisma.users.update({
      where: {
        email: email,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
      },
    });

    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json({ message: "fail", error: { err } });
  }
}
