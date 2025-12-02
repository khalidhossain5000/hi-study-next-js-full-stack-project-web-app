import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    const freeEnrollCollection = await getCollection("free-enrolled-student-info");
    const premiumEnrollCollection = await getCollection("premiumEnrollPaymentInfo");

    const totalFreeEnrolled = await freeEnrollCollection.countDocuments({ studentEmail: email });
    const totalPremiumEnrolled = await premiumEnrollCollection.countDocuments({ studentEmail: email });
    const totalEnrolled = totalFreeEnrolled + totalPremiumEnrolled;

    // Return as array of objects
    const statsArray = [
      { label: "Total Enrolled Courses", count: totalEnrolled },
      { label: "Free Enrolled Courses", count: totalFreeEnrolled },
      { label: "Premium Enrolled Courses", count: totalPremiumEnrolled },
    ];

    return NextResponse.json({
      success: true,
      studentStats: statsArray
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching student stats:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
