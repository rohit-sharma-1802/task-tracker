// Dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";
import TodosCard from "../components/TodosCard";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TodosCard />
    </div>
  );
};

export default Dashboard;
