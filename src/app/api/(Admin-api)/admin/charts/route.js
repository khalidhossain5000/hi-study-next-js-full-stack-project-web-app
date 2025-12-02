import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET() {
  try {
   
    const freeEnrollCollection = await getCollection("free-enrolled-student-info");
    const premiumEnrollCollection = await getCollection("premiumEnrollPaymentInfo");

    // Aggregate categories from premium enrollments
    const premiumCategories = await premiumEnrollCollection.aggregate([
      { $match: { enrollStatus: "enrolled" } },
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]).toArray();

    // Aggregate categories from free enrollments
    const freeCategories = await freeEnrollCollection.aggregate([
      { $match: { enrollStatus: "enrolled" } },
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]).toArray();

    // Merge category counts
    const categoryMap = {};
    [...premiumCategories, ...freeCategories].forEach(item => {
      categoryMap[item._id] = (categoryMap[item._id] || 0) + item.count;
    });

    // Prepare Google Charts data format
    const categoryData = [["Category", "Enrollments"]];
    Object.entries(categoryMap).forEach(([cat, count]) => categoryData.push([cat, count]));

    //  Free vs Premium Students =====
    const freeCount = await freeEnrollCollection.countDocuments({});
    const premiumCount = await premiumEnrollCollection.countDocuments({});

    const freeVsPremiumData = [
      ["Type", "Enrollments"],
      ["Free Students", freeCount],
      ["Premium Students", premiumCount],
    ];

    // Users by Role =====
    const usersCollection = await getCollection("users");
    const totalUsers = await usersCollection.countDocuments({});
    const totalStudents = await usersCollection.countDocuments({ role: "student" });
    const totalAdmins = await usersCollection.countDocuments({ role: "admin" });

    const usersRoleData = [
      ["Role", "Count"],
      ["Total Users", totalUsers],
      ["Total Students", totalStudents],
      ["Total Admins", totalAdmins]
    ];

    // ===== Return all chart data =====
    return NextResponse.json({
      success: true,
      charts: {
        categoryData,      // Pie chart
        freeVsPremiumData, // Doughnut chart
        usersRoleData,     // Bar chart
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching chart data:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
