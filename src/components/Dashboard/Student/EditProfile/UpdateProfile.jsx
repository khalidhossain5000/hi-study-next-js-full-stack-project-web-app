"use client";
import React, { useState } from "react";
import ImageUpload from "../../layout/HandleImageUpload/CourseThumbnail/ImageUploader";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateProfileForm = () => {
  const { data: session, status } = useSession();

  const [name, setName] = useState(session?.user?.name);
  const [imageUrl, setImageUrl] = useState(session?.user?.image || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = session?.user?.email;
  if (status === "loading") return <p>Loaindgsdgdsg</p>;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return Swal.fire("Error", "Name cannot be empty", "error");

    setIsSubmitting(true);
    try {
      const res = await axios.put("/api/auth/register", {
        name,
        profileImage: imageUrl,
        email,
      });

      if (res.data) {
        Swal.fire("Success", "Profile updated successfully", "success");
        // Optional: update session data
        // signIn("credentials", { redirect: false });
      }
    } catch (error) {
      Swal.fire("Error", error.message || "Something went wrong", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Update Profile
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-300 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-300 font-medium mb-1">
            Profile Image
          </label>
          <ImageUpload onUpload={setImageUrl} setImageUrl={imageUrl} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
