import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { HiPlusCircle } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNewTask = () => {
    console.log("hi");
    navigate("add-new-task");
  };

  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 flex justify-center items-center gap-2"
        onClick={handleNewTask}
      >
        Add Task
        <HiPlusCircle />
      </button>
      <div className="flex items-center gap-2 mr-2">
        {/* User Profile */}
        <div className="relative">
          <div>
            <button
              onClick={handleMenuClick}
              className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              ></div>
            </button>
          </div>
          {isMenuOpen && (
            <div className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  navigate("profile");
                }}
                className={classNames(
                  "rounded-sm px-4 py-2 text-gray-700 cursor-pointer"
                )}
              >
                Your Profile
              </div>
              <div
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  navigate("/");
                }}
                className={classNames(
                  "rounded-sm px-4 py-2 text-gray-700 cursor-pointer"
                )}
              >
                Sign out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
