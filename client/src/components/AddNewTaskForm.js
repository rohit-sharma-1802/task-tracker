import React, { useEffect, useState } from "react";
import { marked } from "marked";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AddNewTaskForm = () => {
  const navigate = useNavigate();
  const email = Cookies.get("user_email");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/getcategory",
          { email }
        );
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, [email]);

  const [todoData, setTodoData] = useState({
    title: "",
    image: "",
    category: "",
    priority: "",
    status: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prevTodoData) => ({
      ...prevTodoData,
      [name]: value,
    }));
  };
  const htmlContent = marked(todoData.description);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/createtodo",
        {
          email: email,
          todos: [
            {
              id: Math.floor(Math.random() * 100) + 1, // You can generate a unique ID here
              todoName: "newly created",
              title: todoData.title,
              imageurl: "todoData.image",
              category: todoData.category,
              priority: parseInt(todoData.priority),
              description: todoData.description,
              status: todoData.status,
            },
          ],
        }
      );

      if (response.status === 201) {
        // Todo added successfully, you can redirect or show a success message
        console.log("Todo added successfully");
        navigate("../manage-task");
      }
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center py-4">
          <h4 className="text-3xl font-bold text-gray-600">Add New Task</h4>
        </div>
        <section className="bg-white rounded-2xl">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Task Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Task Title"
                    required
                    value={todoData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Upload Image
                  </label>
                  <input
                    className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 text-gray-400 focus:outline-none placeholder-gray-400 p-2.5"
                    id="file_input"
                    type="file"
                    accept="image/*"
                    name="image"
                    required={true}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    name="category"
                    onChange={handleInputChange}
                  >
                    <option disabled>Select category</option>
                    {categories?.map((category, index) => {
                      return (
                        <option value={category} key={index}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Priority
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    name="priority"
                    onChange={handleInputChange}
                  >
                    <option disabled>Set priority</option>
                    <option value={0}>High</option>
                    <option value={1}>Medium</option>
                    <option value={2}>Low</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Task Status
                  </label>
                  <select
                    id="taskStatus"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    name="status"
                    onChange={handleInputChange}
                  >
                    <option disabled>Set Status</option>
                    <option value={"newly created"}>Newly Created</option>
                    <option value={"in progress"}>In Progress</option>
                    <option value={"completed"}>Completed</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Description
                  </label>
                  <textarea
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type your Markdown here..."
                    rows={5}
                    id="markdownInput"
                    name="description"
                    value={todoData.description}
                    onChange={(e) =>
                      setTodoData((prevTodoData) => ({
                        ...prevTodoData,
                        description: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>
                <div
                  id="markdownPreview"
                  className="w-full p-4 border rounded sm:col-span-2"
                  dangerouslySetInnerHTML={
                    !todoData.description
                      ? { __html: "Preview ..." }
                      : { __html: htmlContent }
                  }
                ></div>
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 mb-2"
                onClick={handleSave}
              >
                Save
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddNewTaskForm;
