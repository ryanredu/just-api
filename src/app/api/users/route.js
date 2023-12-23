import { PrismaClient } from "@prisma/client";

// Create API for registering many students at once
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.users.createMany({
      data: reqBody,
    });

    return Response.json({
      status: "Successfully created all user!",
      message: result,
    });
  } catch (e) {
    return Response.json({ status: "Failed to create user", message: e });
  }
}

// Creating API to get all students together
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.users.findMany();

    return Response.json({
      status: "Find All User Successfully!",
      message: result,
    });
  } catch (e) {
    return Response.json({ status: "Failed to find user" });
  }
}
