import { getCollection } from "@/lib/collections";
import bcrypt from "bcrypt";




export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, profileImage } = body;

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Please provide all required fields" }),
        { status: 400 }
      );
    }



    const usersCollection = await getCollection("users");

    // check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists!" }),
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create new user
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: "student",
      profileImage: profileImage || "https://i.ibb.co/zVB99J4d/DEFAULT.jpg",
      timeCreated: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    return new Response(
      JSON.stringify({
        message: "User registered successfully!",
        userId: result.insertedId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Register Error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
