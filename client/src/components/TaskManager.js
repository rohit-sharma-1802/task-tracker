import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import { HiArrowRight, HiDotsVertical } from "react-icons/hi";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { BoardData } from "../lib/board-data";
import Cookies from "js-cookie";
import axios from "axios";
let isCancelled = false;
function callmethod(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key]["todoName"] === "newly created") {
        const newItem = {
          id: obj[key]["id"],
          priority: obj[key]["priority"],
          title: obj[key]["title"],
          category: obj[key]["category"],
          imageUrl: obj[key]["imageurl"],
          description: obj[key]["description"],
        };
        addItemToBoard("Newly Created", newItem);
      } else if (obj[key]["todoName"] === "in progress") {
        const newItem = {
          id: obj[key]["id"],
          priority: obj[key]["priority"],
          title: obj[key]["title"],
          category: obj[key]["category"],
          imageUrl: obj[key]["imageurl"],
          description: obj[key]["description"],
        };
        addItemToBoard("Newly Created", newItem);
      } else if (obj[key]["todoName"] === "completed") {
        const newItem = {
          id: obj[key]["id"],
          priority: obj[key]["priority"],
          title: obj[key]["title"],
          category: obj[key]["category"],
          imageUrl: obj[key]["imageurl"],
          description: obj[key]["description"],
        };
        addItemToBoard("Completed", newItem);
      }
    }
  }
}

function addItemToBoard(boardName, newItem) {
  const board = BoardData.find((board) => board.name === boardName);
  if (board) {
    board.items.push(newItem);
  } else {
    console.error(`Board with name '${boardName}' not found.`);
  }
}

// function convertBoardDataToTodoData(boardData) {
//   const todoData = {};

//   boardData.forEach((boardSection) => {
//     const boardName = boardSection.name;

//     boardSection.items.forEach((item) => {
//       const itemId = item.id;
//       todoData[itemId] = {
//         todoName: boardName.toLowerCase().replace(/\s+/g, "_"), // assuming todoName is based on boardName
//         id: item.id,
//         priority: item.priority,
//         title: item.title,
//         category: item.category,
//         imageurl: item.imageUrl,
//         description: item.description,
//       };
//     });
//   });
//   return todoData;
// }

const TaskManager = () => {
  const email = Cookies.get("user_email");
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const [todoData, setTodoData] = useState();
  // const [newTodo, setNewTodo] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isCancelled) {
      isCancelled = true;
      const fetchTodoData = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8000/api/v1/getalltodo",
            { email }
          );
          if (response.status === 200) {
            setTodoData(response.data.todos);
            callmethod(response.data.todos);
            console.log(todoData);
          }
        } catch (error) {
          console.error("Error fetching categories:", error.message);
        }
      };
      fetchTodoData();
    }
  }, [email]);

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  // const saveProgress = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/v1/updatetodo",
  //       {
  //         email: email,
  //         todos: newTodo,
  //       }
  //     );

  //     if (response.status === 201) {
  //       // Todo added successfully, you can redirect or show a success message
  //       console.log("Todo added successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error adding todo:", error.message);
  //   }
  // };

  return (
    <div className="p-5 flex flex-col h-screen">
      {/* Board header */}
      <div>
        <div className="flex justify-between py-4">
          <h4 className="text-3xl font-bold text-gray-600">Mange Your Task</h4>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 flex justify-center items-center gap-2"
            // onClick={saveProgress}
          >
            Save Your Progress <HiArrowRight />
          </button>
        </div>
      </div>

      {/* Board columns */}
      {ready && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-5 my-5">
            {boardData.map((board, bIndex) => {
              return (
                <div key={board.name}>
                  <Droppable droppableId={bIndex.toString()}>
                    {(provided, snapshot) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        <div
                          className={`bg-gray-100 rounded-md shadow-md
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && "bg-green-100"}`}
                        >
                          <span
                            className="w-full h-1 bg-gradient-to-r from-gray-700 to-gray-200
                            absolute inset-x-0 top-0"
                          ></span>
                          <h4 className=" p-3 flex justify-between items-center mb-2">
                            <span className="text-2xl text-gray-600">
                              {board.name}
                            </span>
                            <HiDotsVertical className="w-5 h-5 text-gray-500" />
                          </h4>

                          <div
                            className="overflow-y-auto overflow-x-hidden h-auto"
                            style={{ maxHeight: "calc(100vh - 290px)" }}
                          >
                            {board.items.length > 0 &&
                              board.items.map((item, iIndex) => {
                                return (
                                  <CardItem
                                    key={item.id}
                                    data={item}
                                    index={iIndex}
                                  />
                                );
                              })}
                            {provided.placeholder}
                          </div>
                          <div className="flex justify-center items-center my-3 space-x-2 text-lg"></div>
                        </div>
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      )}
    </div>
  );
};

export default TaskManager;
