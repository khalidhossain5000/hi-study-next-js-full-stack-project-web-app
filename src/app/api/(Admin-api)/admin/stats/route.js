// app/api/admin/stats/route.ts

import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1️⃣ Total Users
    const usersCollection = await getCollection("users");
    const totalUsers = await usersCollection.countDocuments({});

    // 2️⃣ Total Courses
    const freeCoursesCollection = await getCollection("freeCourses");
    const premiumCoursesCollection = await getCollection("premiumCourses");
    const freeCourses = await freeCoursesCollection.countDocuments({});
    const premiumCourses = await premiumCoursesCollection.countDocuments({});
    const totalCourses = freeCourses + premiumCourses;

    // 3️⃣ Total Premium Revenue
    const premiumEnrollCollection = await getCollection("premiumEnrollPaymentInfo");

    const premiumRevenueAgg = await premiumEnrollCollection
      .aggregate([
        {
          $match: { paymentStatus: "completed" } // count only completed payments
        },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: { $toDouble: "$paid" } } // convert string to number
          }
        }
      ])
      .toArray();

    const premiumRevenue = premiumRevenueAgg[0]?.totalRevenue || 0;

    // Return simplified stats
    return NextResponse.json(
      {
        success: true,
        stats: {
          totalUsers,
          totalCourses,
          premiumRevenue,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch stats", error: error.message },
      { status: 500 }
    );
  }
}
