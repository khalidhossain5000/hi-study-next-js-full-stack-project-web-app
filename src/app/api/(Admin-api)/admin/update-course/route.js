// app/api/admin/update-course/route.js
import { getCollection } from "@/lib/collections";
import { ObjectId } from "mongodb";

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing course ID" }),
        { status: 400 }
      );
    }

    const body = await req.json();

    if (!body.type || !["free", "premium"].includes(body.type)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid course type" }),
        { status: 400 }
      );
    }

    // Choose the correct collection based on type
    const collectionName = body.type === "free" ? "freeCourses" : "premiumCourses";
    const courseCollection = await getCollection(collectionName);

    const result = await courseCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...body, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Course not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Course updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating course:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
}
