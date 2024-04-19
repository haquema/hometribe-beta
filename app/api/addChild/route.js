import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const { firstName, lastName, gender, age, parentId } = await request.json();

    const child = await prisma.child.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age,
        
        parentId: parentId,
      },
    });
    console.log('this is child that has been added', child);
    if (child) {
      return NextResponse.json({ message: "success" });
    } else {
      return NextResponse.json({ message: "fail" });
    }
  } catch (err) {
    return NextResponse.json({ message: "fail", error: { err } });
  }
}
