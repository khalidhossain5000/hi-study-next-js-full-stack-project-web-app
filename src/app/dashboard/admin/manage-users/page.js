import UsersTable from "@/components/Dashboard/Admin/ManageUsers/UsersTable/UsersTable";
import React from "react";

const AllUsers = () => {
  return (
    <div className=" pb-20">
      <div className="shadow-xl rounded-xl bg-[#e1e1e1b9] w-full p-8">
        <h2 className="text-xl font-gabriela font-semibold text-gray-900 mb-5">Manage Users</h2>

        <UsersTable />
      </div>
    </div>
  );
};

export default AllUsers;
