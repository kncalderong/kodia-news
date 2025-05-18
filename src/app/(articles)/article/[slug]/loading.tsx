import React from "react";

const loading = () => {
  return (
    <div className="container flex flex-col justify-center p-4 gap-4 md:p-6 lg:p-8 ">
      <div className="text-3xl w-full h-8 font-bold bg-semi-dark-blue rounded-lg"></div>
      <div className="text-gray flex items-center justify-between">
        <div className="w-1/4 h-4 bg-semi-dark-blue rounded-lg"></div>
        <div className="w-1/4 h-4 bg-semi-dark-blue rounded-lg"></div>
      </div>
      <div className="block w-full h-[400px] relative rounded-lg overflow-hidden bg-semi-dark-blue "></div>
      <div className="flex flex-col gap-4">
        <div className="w-full h-4 bg-semi-dark-blue rounded-lg"></div>
        <div className="w-full h-4 bg-semi-dark-blue rounded-lg"></div>
      </div>
    </div>
  );
};

export default loading;
