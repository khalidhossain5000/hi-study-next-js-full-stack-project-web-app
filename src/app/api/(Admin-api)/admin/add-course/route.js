import { getCollection } from "@/lib/collections";

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
