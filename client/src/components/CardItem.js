import React, { useState } from "react";
import { HiPlus, HiCalendar, HiBell, HiMail } from "react-icons/hi";
import { Draggable } from "react-beautiful-dnd";
import AddNewTaskModal from "./AddNewTaskForm";
function CardItem({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <div className="flex flex-row justify-between">
            <label
              className={`bg-gradient-to-r
                px-3 py-0.5 rounded text-white text-sm
                ${
                  data.priority === 0
                    ? "from-blue-600 to-blue-400"
                    : data.priority === 1
                    ? "from-green-600 to-green-400"
                    : "from-red-600 to-red-400"
                }
                `}
            >
              {data.priority === 0
                ? "Low "
                : data.priority === 1
                ? "Medium"
                : "High "}
            </label>
            <label
              htmlFor="catgory"
              className="
                px-2 py-0.5 rounded text-white text-sm bg-slate-700"
            >
              {data.cateogry}
            </label>
          </div>

          <h5 className="text-md my-3 py-3 text-lg leading-6">{data.title}</h5>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <button>
                  <HiCalendar className="w-5 h-5 text-gray-500" />
                </button>
              </span>
              <span className="flex space-x-1 items-center">
                <button>
                  <HiBell className="w-5 h-5 text-gray-500" />
                </button>
              </span>
              <span className="flex space-x-1 items-center">
                <button>
                  <HiMail className="w-5 h-5 text-gray-500" />
                </button>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <button className="flex gap-1 items-center border-2 px-2 py-1 text-sm">
                    <HiPlus />
                    Details
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;
