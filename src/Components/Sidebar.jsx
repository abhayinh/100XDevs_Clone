import React, { useState } from "react";
import Home_icon from "../assets/Home_icon.png";
import Edu_icon from "../assets/Education_icon.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const [active, setActive] = useState("home");

  const navigate = useNavigate();

  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-14 left-0 h-[100dvh] w-72 bg-[#E8F1FD] shadow-md z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <p className="pt-10 pl-10 font-semibold text-[#6D7278]">Main Menu</p>

        {/* HOME */}
        <div
          onClick={() => {
            setActive("home");
            setOpen(false);
          }}
          className={`p-4 pl-7 flex items-center gap-3 cursor-pointer 
          ${active === "home" ? "text-[#146fe6] font-semibold" : "text-black"}`}
        >
          <img className="w-8" src={Home_icon} alt="" />
          <p onClick={() => navigate("/")}>Home</p>
        </div>

        {/* COURSE */}
        <div
          onClick={() => {
            setActive("course");
            setOpen(false);
          }}
          className={`p-4 pl-7 flex items-center gap-3 cursor-pointer 
          ${
            active === "course" ? "text-[#146fe6] font-semibold" : "text-black"
          }`}
        >
          <img className="w-8" src={Edu_icon} alt="" />
          <p onClick={() => navigate("/New_Course")}>Course</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
