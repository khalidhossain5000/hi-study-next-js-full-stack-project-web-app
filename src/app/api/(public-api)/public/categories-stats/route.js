
import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const freeCoursesCol = await getCollection("freeCourses");
    const premiumCoursesCol = await getCollection("premiumCourses");

    // Category names
    const CATEGORY = [
      "Web-Development",
      "Data-Science",
      "Mobile-Development",
      "Graphic-Design",
      "Marketing",
      "AI-&-ML",
      "Graphic Design",
      "Language",
    ];

    const results = [];

    for (let cat of CATEGORY) {
      const freeCount = await freeCoursesCol.countDocuments({ category: cat });
      const premiumCount = await premiumCoursesCol.countDocuments({ category: cat });

      results.push({
        name: cat,
        count: freeCount + premiumCount,
      });
    }

    return NextResponse.json(
      { success: true, categories: results },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
