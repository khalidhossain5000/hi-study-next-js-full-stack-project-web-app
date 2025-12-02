import ChartContainer from "@/components/Dashboard/Admin/Charts/ChartContainer";
import StatsCard from "@/components/Dashboard/Admin/DashboardHome/StatsCard/StatsCard";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import StudentCard from "@/components/Dashboard/Student/DashboardHomeStats/StudentCard";

const DashboardHome = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>You are not logged in</p>;
  }

  const userRole = session.user.role;

  return (
    <div>
      {userRole === "admin" && (
        <div>
          <StatsCard />

          <ChartContainer />
        </div>
      )}
      
    




    {
        userRole === "student" && (
            <StudentCard />
        )
    }

    </div>
  );
};

export default DashboardHome;
