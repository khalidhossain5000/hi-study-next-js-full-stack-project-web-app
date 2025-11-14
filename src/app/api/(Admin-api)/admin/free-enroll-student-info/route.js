import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const freeEnrolledCollection = await getCollection(
      "free-enrolled-student-info"
    );
    const data = await req.json();

    const {studentEmail,courseId}=data
    const isAlreadyEnrolled=await freeEnrolledCollection.findOne({
        studentEmail,
        courseId
    })
if (isAlreadyEnrolled) {
     
      return NextResponse.json(
        { message: "You have already enrolled in this course!" },
        { status: 400 } // bad request
      );
    }
    console.log(data,isAlreadyEnrolled);
    const result = await freeEnrolledCollection.insertOne(data);
    return NextResponse.json({ message: "Bike Added Successfully", result });
  } catch (error) {
    console.log("add bike error", error);
    return NextResponse.json({ message: "Bike Adds Error" }, error);
  }
}


export async function GET(){
const freeEnrolled=await getCollection("free-enrolled-student-info")
const result=await freeEnrolled.find().toArray()
return NextResponse.json({ message: "enrolled info get Successfully", result });
}