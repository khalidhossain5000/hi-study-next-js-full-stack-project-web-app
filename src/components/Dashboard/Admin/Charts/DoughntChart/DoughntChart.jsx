import React from "react";
import Chart from "react-google-charts";

const DoughntChart = ({ usersRoleData }) => {
  const options = {
  title: "Line Chart Example",
  hAxis: { title: " Users" },
  vAxis: { title: "Role Count" },
  legend: "none",
};
  return (
   <div className="w-full max-w-xl p-4 shadow-lg rounded-lg bg-white dark:bg-gray-300 border border-gray-200 dark:border-gray-700">
      <Chart
         chartType="LineChart"
      width="100%"
      height="400px"
      data={usersRoleData}
      options={options}
      />
    </div>
  );
};

export default DoughntChart;
