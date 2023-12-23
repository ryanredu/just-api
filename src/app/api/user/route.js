import { PrismaClient } from "@prisma/client";

//Creating API for single student registration
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.users.create({
      data: reqBody,
    });
    return Response.json({
      status: "Successfully created single user!",
      message: result,
    });
  } catch (e) {
    return Response.json({
      status: "Failed to created single user!",
      message: e,
    });
  }
}

// Creating API to delete a single student
export async function DELETE(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const deleteUser = await prisma.users.delete({
      where: { id: reqBody["id"] },
    });

    return Response.json({
      status: "Deleted user successfully!",
      message: deleteUser,
    });
  } catch (e) {
    return Response.json({ status: "Failed to delete user", message: e });
  }
}

// Creating API to update student information
export async function PUT(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const updateUser = await prisma.users.update({
      where: { id: reqBody["id"] },
      data: {
        first_name: reqBody["first_name"],
        last_name: reqBody["last_name"],
        age: reqBody["age"],
        grade: reqBody["grade"],
        courses: reqBody["courses"],
      },
    });

    return Response.json({
      status: "Updated User Successfully",
      message: updateUser,
    });
  } catch (e) {
    return Response.json({ status: "Failed to update", message: e });
  }
}

// Creating API to show the data of a single student
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({
      where: { id: Number(id) },
    });

    return Response.json({
      status: "Find user successfully!",
      message: result,
    });
  } catch (e) {
    console.log(e);
    return Response.json({ status: "Failed to find user", message: e });
  }
}
