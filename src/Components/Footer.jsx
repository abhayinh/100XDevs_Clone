import React from "react";
// import navbar_img from "../assets/navbar_image.jpg";
import navbar_img1 from "../assets/navbar_image.jpg";
import play_store from "../assets/play_store.jpg";
import twitter from "../assets/Twitter_image.png"
import loaction from "../assets/Location_image.png"
import Youtube from "../assets/Youtube_image1.png"
import Instagram from "../assets/instagram_image.png"

const Footer = () => {
  return (
    <div className="bg-[#E8F1FD] px-4 md:px-16 py-10 md:ml-72">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo */}
        <div>
          <img className="w-24" src={navbar_img1} alt="logo" />
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <p className="mb-2 text-blue-600 cursor-pointer">
            Terms And Condition
          </p>
          <p className="mb-2 text-blue-600 cursor-pointer">
            Privacy Policy
          </p>
          <p className="mb-2 text-blue-600 cursor-pointer">
            Refunds & Cancellation Policy
          </p>
        </div>

        {/* App + Social */}
        <div>
          <p className="font-semibold mb-3">Download App</p>
          <img className="w-28 mb-4" src={play_store} alt="playstore" />

          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex gap-3">
            <img className="w-6" src={twitter} alt="" />
            <img className="w-6" src={loaction} alt="" />
            <img className="w-6" src={Youtube} alt="" />
            <img className="w-6" src={Instagram} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
