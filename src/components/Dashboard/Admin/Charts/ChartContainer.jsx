"use client";
import React from "react";
import PieChart from "./CategoryPieChart/PieChart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ColumnChart from "./ColumnChart/ColumnChart";
import DoughntChart from "./DoughntChart/DoughntChart";

const ChartContainer = () => {
  const {
    data: chartData = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all-chart data"],
    queryFn: async () => {
      const res = await axios.get("/api/admin/charts");
      return res.data.charts;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );

  const categoryData = chartData.categoryData || [];
  const freevspremium = chartData.freeVsPremiumData || [];
  const usersRoleData = chartData.usersRoleData || [];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  gap-5 my-12">
      {/* Chart components will go here, e.g., <PieChart data={chartData.categoryData} /> */}
      <div>
        <PieChart categoryData={categoryData} />
      </div>

      {/* column chart */}
      <div className="h-">
        <ColumnChart freevspremium={freevspremium} />
      </div>

      {/* doughnt chart */}
      <div>
        <DoughntChart usersRoleData={usersRoleData} />
      </div>
    </div>
  );
};

export default ChartContainer;
