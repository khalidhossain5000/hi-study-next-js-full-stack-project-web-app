import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const premiumEnrollInfoCollection = await getCollection(
      "premiumEnrollPaymentInfo"
    );
    const data = await req.json();

    const { studentEmail, courseId } = data;

    const alreadyEnrolled = await premiumEnrollInfoCollection.findOne({
      studentEmail,
      courseId,
    });

    if (alreadyEnrolled) {
      return NextResponse.json(
        { message: "You have already enrolled in this course!" },
        { status: 400 } // bad request
      );
    }

    const result = await premiumEnrollInfoCollection.insertOne(data);

    return NextResponse.json({
      result,
      message: "Premium info successfuly completed",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, status: 500 });
  }
}

export async function GET() {
  const premiumEnrollInfoCollection = await getCollection(
    "premiumEnrollPaymentInfo"
  );
  const result = await premiumEnrollInfoCollection.find().toArray();
  return NextResponse.json({
      result,
      message: "Premium info Got completed",
    });
}
