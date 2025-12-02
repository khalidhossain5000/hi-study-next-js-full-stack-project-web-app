import React from 'react';
import Chart from 'react-google-charts';

const ColumnChart = ({freevspremium}) => {
    const colors = ["#4da6ff", "#ff4d4d", ]; 

  // Add style column dynamically
  const chartData = freevspremium.map((row, index) => {
    // Skip header row
    if (index === 0) return [...row, { role: "style" }];
    return [...row, `color: ${colors[index - 1] || "#888"}`];
  });
const options = {
 title: "Free vs Premium Students",
    legend: "none",
  backgroundColor: "transparent",
};
  return (
    <div className="w-full max-w-xl p-4 shadow-lg rounded-lg bg-white dark:bg-gray-300 border border-gray-200 dark:border-gray-700 h-full">
    <Chart 
    chartType="ColumnChart"
     width="100%" 
     height="100%" 
     options={options}
     data={chartData} />

     </div>
  );
};

export default ColumnChart;