import React from "react";

const DefaultMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-[#394ef4]/10 via-[#ba66e7]/10 to-[#00f2ff]/10 rounded-2xl border border-dashed border-[#394ef4]/40">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-2">
        No Items Available
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
        It looks a little empty here — please add something to get started!
      </p>
    </div>
  );
};

export default DefaultMessage;
