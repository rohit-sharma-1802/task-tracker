// TodosCard.js
import React from "react";

const TodosCard = () => {
  return (
    <div className="w-3/4 p-8 bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">My To-Do List</h2>
        <div className="space-y-4">
          {/* Todo items go here */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Create Dashboard UI</span>
          </div>
          {/* Add more todo items as needed */}
        </div>
      </div>
    </div>
  );
};

export default TodosCard;
