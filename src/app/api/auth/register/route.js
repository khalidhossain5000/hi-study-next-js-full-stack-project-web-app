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
export async function PUT(req) {
  try {
    const body = await req.json();
    const { name, profileImage, email } = body;
console.log(email,body);
    if (!email) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: Email missing" }),
        { status: 401 }
      );
    }

    if (!name && !profileImage) {
      return new Response(
        JSON.stringify({ message: "Nothing to update" }),
        { status: 400 }
      );
    }

    const usersCollection = await getCollection("users");

    const updateData = {};
    if (name) updateData.name = name;
    if (profileImage) updateData.profileImage = profileImage;

    const result = await usersCollection.updateOne(
      { email },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    // Fetch updated user
    const updatedUser = await usersCollection.findOne({ email });

    return new Response(
      JSON.stringify({
        message: "Profile updated successfully",
        user: updatedUser,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Profile Error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}