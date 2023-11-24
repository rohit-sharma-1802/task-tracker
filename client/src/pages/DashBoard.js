import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Cookies from "js-cookie";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user_name and user_email cookies are not set
    const userName = Cookies.get("user_name");
    const userEmail = Cookies.get("user_email");

    if (!userName || !userEmail) {
      // Redirect to the login page if cookies are not set
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
