// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-gray-100 h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Task Tacker</h1>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-600"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              Dashboard
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
