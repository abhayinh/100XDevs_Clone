import React from "react";
import Featured1 from "../assets/Featured1.png";
import Featured2 from "../assets/Featured2.png";
import Featured3 from "../assets/Featured3.png";

const Featured = () => {
  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center">
        <p className="my-10 text-3xl font-semibold">Featured</p>
      </div>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 mb-12">
        
        {/* Card 1 */}
        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Featured1} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web Development + Devops + Blockchain Cohort
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">
              29.53% Off
            </p>
          </div>

          <button className="bg-[#146fe6] mx-auto block px-10 my-4 py-2 rounded-3xl text-white">
            View Details
          </button>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Featured2} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web development + Devops Cohort
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">
              29.53% Off
            </p>
          </div>

          <button className="bg-[#146fe6] mx-auto block px-10 my-4 py-2 rounded-3xl text-white">
            View Details
          </button>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Featured3} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web 3 + Blockchain Cohort
          </p>

          <div className="flex justify-between px-5 mt-4">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">
              29.53% Off
            </p>
          </div>

          <button className="bg-[#146fe6] mx-auto block px-10 my-4 py-2 rounded-3xl text-white">
            View Details
          </button>
        </div>

      </div>
    </>
  );
};

export default Featured;
