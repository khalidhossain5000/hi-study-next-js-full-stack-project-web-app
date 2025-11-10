"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DefaultMessage from "@/components/Dashboard/layout/DefaultMessage/DefaultMessage";
import Image from "next/image";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const UsersTable = () => {
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

  if (isLoading) return <h2 className="text-white">Loading users...</h2>;
  console.log(AllUsers, "this is all users");
  if (error) return <h2 className="text-red-500">Error loading users</h2>;

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
  return (
    <div>
      {AllUsers.length === 0 && <DefaultMessage />}

      {AllUsers.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <TableHeader className="bg-gray-50 dark:bg-gray-800">
              <TableRow>
                <TableHead className="w-[50px] text-center">S/L</TableHead>
                <TableHead className="text-left">Image</TableHead>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-left">Email</TableHead>
                <TableHead className="text-left">User Created</TableHead>
                <TableHead className="text-left">Role</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {AllUsers.map((user, i) => (
                <TableRow
                  key={user._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <TableCell className="text-center font-medium">
                    {i + 1}
                  </TableCell>

                  <TableCell>
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                      <Image
                        src={user.profileImage || "/default-avatar.png"}
                        alt={user.name || "User avatar"}
                        fill
                        className="object-cover"
                        sizes="40px"
                        priority={false}
                      />
                    </div>
                  </TableCell>

                  <TableCell className="font-medium">
                    {user.name || "NoNameFound"}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {user.email}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {new Date(user.timeCreated).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="capitalize text-gray-700 dark:text-gray-200">
                    {user.role}
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {user.role !== "admin" && (
                        <button
                          onClick={() =>
                            handleRoleChange(user._id, "makeAdmin")
                          }
                          className="px-3 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                        >
                          Make Admin
                        </button>
                      )}

                      {user.role === "admin" && (
                        <button
                          onClick={() =>
                            handleRoleChange(user._id, "makeStudent")
                          }
                          className="px-3 py-1 text-xs font-medium rounded-md bg-yellow-100 text-yellow-600 hover:bg-yellow-600 hover:text-white transition"
                        >
                          Make Student
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
