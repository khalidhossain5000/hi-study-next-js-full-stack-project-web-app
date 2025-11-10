/* eslint-disable @next/next/no-img-element */
"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import {
  Shield,
  ShieldOff,
  Trash2,
  Mail,
  Calendar,
  Crown,
  GraduationCap,
  User,
} from "lucide-react";

const UsersCard = () => {
  // Fetch data
  const {
    data: AllUsers = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axios.get("/api/admin/users");
      return res.data.data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#394ef4] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
            Loading users...
          </h2>
        </div>
      </div>
    );

  console.log(AllUsers, "this is all users");

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 flex items-center justify-center">
        <h2 className="text-xl font-semibold text-red-500 dark:text-red-400">
          Error loading users
        </h2>
      </div>
    );

  // make admin api
  const handleRoleChange = async (userId, roleAction) => {
    try {
      const res = await axios.patch(
        `/api/admin/users?id=${userId}&action=${roleAction}`
      );
      console.log(res.data);

      if (res.data.success) {
        refetch();
        let msg = "";
        if (roleAction === "makeAdmin")
          msg = "User promoted to Admin successfully!";
        else if (roleAction === "makeInstructor")
          msg = "User promoted to Instructor successfully!";
        else if (roleAction === "makeStudent")
          msg = "User role reset to Student successfully!";

        toast.success(msg);
      }
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role!");
    }
  };

  // delete api
  const handleDeleteUser = async (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this user permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`/api/admin/users?id=${userId}`);
          if (res.data.success) {
            Swal.fire(
              "Deleted!",
              "User has been deleted successfully.",
              "success"
            );
            refetch();
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error!", "Failed to delete user.", "error");
        }
      }
    });
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-900 p-2 md:mt-5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#394ef4] to-[#ba66e7] bg-clip-text text-transparent mb-4">
            User Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Manage user roles and permissions with ease
          </p>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AllUsers.map((user) => (
            <div
              key={user._id}
              className="group relative bg-linear-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#394ef4]/10 via-transparent to-[#ba66e7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-6">
                {/* Header with Avatar and Role Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-14 h-14 rounded-2xl border-2 border-white/50 shadow-lg"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                          user.role === "admin"
                            ? "bg-purple-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white text-lg truncate max-w-[120px]">
                        {user.name}
                      </h3>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        }`}
                      >
                        {user.role === "admin" ? (
                          <Crown className="w-3 h-3 mr-1" />
                        ) : (
                          <GraduationCap className="w-3 h-3 mr-1" />
                        )}
                        {user.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <Mail className="w-4 h-4 text-[#394ef4]" />
                    <span className="text-sm truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 text-[#ba66e7]" />
                    <span className="text-sm">
                      {formatDate(user.timeCreated)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  {user.role === "student" ? (
                    <button
                      onClick={() => handleRoleChange(user._id, "makeAdmin")}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#394ef4] to-[#5a6ef7] hover:from-[#2d3fd0] hover:to-[#4a5bef] text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Shield className="w-4 h-4 hidden md:block" />
                      <span>Make Admin</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRoleChange(user._id, "makeStudent")}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <ShieldOff className="w-4 h-4 hidden md:block" />
                      <span>Remove Admin/Instructor</span>
                    </button>
                  )}
                  {user.role === "admin" && (
                    <button
                      onClick={() =>
                        handleRoleChange(user._id, "makeInstructor")
                      }
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <ShieldOff className="w-4 h-4 hidden md:block" />
                      <span>Make Instructor</span>
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[100px]"
                  >
                    <Trash2 className="w-4 h-4 hidden md:block" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#394ef4]/20 to-[#ba66e7]/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {AllUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-linear-to-r from-[#394ef4] to-[#ba66e7] rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-2">
              No Users Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              There are no users to display at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersCard;
