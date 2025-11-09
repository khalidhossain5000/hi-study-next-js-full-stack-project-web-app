import { getCollection } from "@/lib/collections";
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
