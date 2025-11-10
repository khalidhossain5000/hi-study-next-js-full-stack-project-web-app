import { getCollection } from "@/lib/collections";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userCollection = await getCollection("users");
    const results = await userCollection.find({}).toArray();

    return NextResponse.json(
      {
        success: true,
        message: "Users fetched successfully",
        data: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch users",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// make admin api start from here

// app/api/admin/users/route.js

export async function PATCH(req) {
  try {
    const userCollection = await getCollection("users");

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const action = searchParams.get("action");

    if (!id || !action) {
      return NextResponse.json({ success: false, message: "Missing parameters" }, { status: 400 });
    }

    let newRole;

    if (action === "makeAdmin") newRole = "admin";
    else if (action === "makeInstructor") newRole = "instructor";
    else if (action === "makeStudent") newRole = "student"; // default role
    else return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });

    const result = await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { role: newRole } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, message: "User not found or role unchanged" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: `Role updated to ${newRole}` });
  } catch (error) {
    console.error("Error updating role:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}


//delete user api starts here
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams, "this is params");
    const id = searchParams.get("id");
    const userCollection = await getCollection("users");
    const result = await userCollection.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json({ success: false, error });
  }
}
