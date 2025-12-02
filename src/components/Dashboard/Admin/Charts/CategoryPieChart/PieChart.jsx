import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ categoryData }) => {
  if (!categoryData || categoryData.length < 2) {
    return <p className="text-center text-gray-500">No chart data found</p>;
  }

  const options = {
    title: "Category Wise Enrollments",
    backgroundColor: "transparent",
    
    pieHole: 0, 
    chartArea: { width: "90%", height: "80%" },
    legend: { position: "bottom" },
  };

  return (
    <div className="w-full max-w-xl p-4 shadow-lg rounded-lg bg-white dark:bg-gray-300 border border-gray-200 dark:border-gray-100 h-full">
      <Chart
        chartType="PieChart"
        data={categoryData}
        options={options}
        width={"100%"}
        height={"300px"}
        loader={<div className="text-center">Loading Chart...</div>}
      />
    </div>
  );
};

export default PieChart;
