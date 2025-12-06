import { useState } from "react";
import Navbar_image from "../assets/navbar_image.jpg";
import img from "../assets/image.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="flex justify-between items-center w-full px-4 sm:px-10 py-2 mt-1 shadow-sm sticky top-0 bg-white z-50">
        {/* LEFT */}
        <div className="flex items-center gap-3">
        <button onClick={() => setOpen(prev => !prev)} className="md:hidden cursor-pointer">
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>

          <img className="w-11 cursor-pointer" src={Navbar_image} />
        </div>

        {/* RIGHT */}
        <div className="hidden sm:flex">
          <div className="flex items-center justify-between pl-3 bg-[#F0F1F3] rounded-3xl mr-2 w-[290px]">
            <input
              className="outline-none bg-transparent"
              type="text"
              placeholder="Type here to search.. "
            />
            <img
              className="w-12 px-3 border-l border-gray-300 h-full object-contain cursor-pointer hover:bg-gray-300 rounded-r-3xl transition"
              src={img}
              alt=""
            />
          </div>

          <button className="bg-[#146fe6] cursor-pointer rounded-3xl px-6 py-2 text-white mr-2">
            Signup
          </button>
          <button className="bg-[#146fe6] cursor-pointer rounded-3xl px-6 py-2 text-white">
            Login
          </button>
        </div>
      </div>

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
