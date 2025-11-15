import { getCollection } from "@/lib/collections";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    console.log(email);
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const premiumCollection = await getCollection("premiumEnrollPaymentInfo");
    const freeCollection = await getCollection("free-enrolled-student-info");

    // Premium enrollments
    const premiumEnroll = await premiumCollection
      .find({ studentEmail: email })
      .toArray();

    // Free enrollments
    const freeEnroll = await freeCollection
      .find({ studentEmail: email })
      .toArray();

    return new Response(JSON.stringify({ premiumEnroll, freeEnroll }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
