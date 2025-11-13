import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const premiumEnrollInfoCollection = await getCollection(
      "premiumEnrollPaymentInfo"
    );
    const data = req.json();
    const result = await premiumEnrollInfoCollection.insertOne(data);

    return NextResponse({
      result,
      message: "Premium info successfuly completed",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, status: 500 });
  }
}
