import { getCollection } from "@/lib/collections";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.type || !["free", "premium"].includes(body.type)) {
      return new Response(
        JSON.stringify({ error: "Invalid course type" }),
        { status: 400 }
      );
    }

    // Choose collection based on course type
    const collectionName =
      body.type === "free" ? "freeCourses" : "premiumCourses";

    const courseCollection = await getCollection(collectionName);

    const result = await courseCollection.insertOne({
      ...body,
      publishedAt: new Date(),
      updatedAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Course added successfully",
        result,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding course:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to add course" }),
      { status: 500 }
    );
  }
}



//delete user api starts here


export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("id");

    if (!courseId) {
      return NextResponse.json(
        { success: false, message: "Missing courseId" },
        { status: 400 }
      );
    }

    // প্রথমে freeCourses collection থেকে খুঁজুন
    const freeCollection = await getCollection("freeCourses");
    const premiumCollection = await getCollection("premiumCourses");

    let course = await freeCollection.findOne({ _id: new ObjectId(courseId) });
    let collectionToUse;

    if (course) {
      collectionToUse = freeCollection;
    } else {
      // freeCourses এ না থাকলে premiumCourses এ খুঁজুন
      course = await premiumCollection.findOne({ _id: new ObjectId(courseId) });
      collectionToUse = premiumCollection;
    }

    if (!course) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 }
      );
    }

    // কোর্স delete করুন
    const result = await collectionToUse.deleteOne({ _id: new ObjectId(courseId) });

    return NextResponse.json({
      success: true,
      message: "Course deleted successfully",
      result,
    });
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
