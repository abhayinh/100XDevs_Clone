import React from "react";
import Featured1 from "../assets/Featured1.png";
import Featured2 from "../assets/Featured2.png";
import Featured3 from "../assets/Featured3.png";
import Courses1 from "../assets/Courses1.jpeg";
import Courses2 from "../assets/Courses2.jpeg";
import Courses3 from "../assets/Courses3.jpeg";
import Courses4 from "../assets/Courses4.jpeg";
import Courses5 from "../assets/Courses5.png";
import Courses6 from "../assets/Courses6.png";

const New_Course = () => {
  return (
    <div className="w-full md:pl-72 mb-40">
      <p className="text-center my-10 text-xl font-bold">Courses</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 mb-12">
        {/* Card 1 */}
        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Featured1} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web Development + Devops + Blockchain Cohort
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-full sm:w-[320px]">
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
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Featured3} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web development + Devops Cohort
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Courses6} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web 3 + Blockchain Cohort
          </p>

          <div className="flex justify-between px-5 mt-4">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Courses5} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Web Development Cohort
          </p>

          <div className="flex justify-between px-5 mt-4">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Courses4} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Complete Devops Cohort
          </p>

          <div className="flex justify-between px-5 mt-4">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Courses3} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Live Full Stack Open Source Cohort 1 (Finished)
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Courses2} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Live Full Stack Open Source Cohort 1 (Finished)
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <img className="rounded-xl w-full" src={Courses1} alt="" />

          <p className="text-lg font-semibold py-6 px-5">
            Live Full Stack Open Source Cohort 1 (Finished)
          </p>

          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold">5989</p>
            <p className="text-lg font-semibold text-[#1dc26a]">29.53% Off</p>
          </div>

          <button className="bg-[#146fe6] cursor-pointer  mx-auto block px-10 my-4 py-2.5 rounded-3xl text-white w-[320px]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default New_Course;
