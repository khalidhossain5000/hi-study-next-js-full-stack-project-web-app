import UsersTable from "@/components/Dashboard/Admin/ManageUsers/UsersTable/UsersTable";
import React from "react";

const AllUsers = () => {
  return (
    <div className=" pb-20">
      <div className="shadow-xl rounded-xl bg-[#e1e1e1b9] dark:bg-[#192335] w-full p-8">
        <h2 className="text-2xl font-gabriela font-semibold text-gray-900 dark:text-gray-100 mb-5">Manage Users</h2>

        <UsersTable />
      </div>
    </div>
  );
};

export default AllUsers;
