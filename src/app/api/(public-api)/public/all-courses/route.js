import { getCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const freeCollection=await getCollection('freeCourses')
        const premiumCollection=await getCollection('premiumCourses')

        //fetch data from both collection
        const freeCourses=await freeCollection.find({}).toArray()
        const premiumCourses=await premiumCollection.find({}).toArray()

        //combine both collection and return single allcourses to front end
        const allCourses=[...freeCourses,...premiumCourses]

        //sort to show latest courses first
        allCourses.sort((a,b)=>new Date(b.publishedAt) - new Date(a.publishedAt))

        return NextResponse.json({message:'all courses data fetched by combined',allCourses})
    }
    catch (error) {
        console.log(error)

        return NextResponse.json({error,status:500,})
    }
}