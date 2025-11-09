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
  return (
    <div>
      {AllUsers.length === 0 && <DefaultMessage />}

      {AllUsers.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full text-center">S/L</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>User Created</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {AllUsers.map((user, i) => (
              <TableRow key={user._id}>
                <TableCell className="text-center font-medium">
                  {i + 1}
                </TableCell>
                <TableCell>
                  <div className="w-10 h-10 relative">
                    <Image
                      src={user.profileImage || ""}
                      alt={user.name || "User avatar"}
                      fill
                      className="rounded-full object-cover"
                      sizes="40px"
                      priority={false}
                    />
                  </div>
                </TableCell>
                <TableCell>{user.name || "NoNameFoundHere"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* Make Admin */}

                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                    >
                      Make Admin
                    </button>

                    {/* Remove Admin */}

                    <button
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-yellow-100 text-yellow-600 hover:bg-yellow-600 hover:text-white transition cursor-pointer"
                    >
                      Remove Admin
                    </button>

                    {/* Delete User */}
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default UsersTable;
