import React from "react";
import Navbar from "../Components/Navbar";
import Main_Content from "../Components/Main_content";
import Featured from "../Components/Featured";
import About from "../Components/About";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <div className="ml-0 md:ml-72">  
        <Main_Content />
        <Featured />
        <About />
      </div>
    </div>
  );
};

export default Home;
