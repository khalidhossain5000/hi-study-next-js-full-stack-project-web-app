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

export async function PATCH(req) {
  try {
    const userCollection = await getCollection("users");
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const action = searchParams.get("action");
    const role = action === "make" ? "admin" : "student";
    const result = await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { role } }
    );

    return NextResponse.json({ success: true, updated: result });
  } catch (error) {
    console.error("Error Making Admin to users:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to make admin ",
        error: error.message,
      },
      { status: 500 }
    );
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
