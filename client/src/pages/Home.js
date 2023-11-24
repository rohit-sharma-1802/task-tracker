import React from "react";

import homebg from "../assets/HomePage.png"; // Assuming homebg.jpg is the correct path to your image
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center overflow-hidden "
      style={{ backgroundImage: `url(${homebg})` }} // Fixed image import issue
    >
      {/* Navabr will be here */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        {/* Center Content */}
        <h1 className="text-7xl mb-8 font-extrabold text-white ">
          Welcome to TaskTracker
        </h1>
        <h4 className="text-3xl mb-8 text-white">
          Manage your task with us and increase your productivity
        </h4>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white uppercase font-semibold px-10 py-3 rounded-lg">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white uppercase font-semibold px-10 py-3 rounded-lg">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
