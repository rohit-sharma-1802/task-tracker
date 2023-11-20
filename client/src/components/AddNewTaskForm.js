import React, { useState } from "react";
import { marked } from "marked";
const AddNewTaskForm = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const handleInputChange = (event) => {
    const newMarkdownContent = event.target.value;
    setMarkdownContent(newMarkdownContent);
  };
  const htmlContent = marked(markdownContent);
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
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Task Title"
                    required
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
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option disabled>Select category</option>
                    <option value="LAB">Lab</option>
                    <option value="ASGN">Assignment</option>
                    <option value="EXAM">Exam Prep</option>
                    <option value="PW">Personal Work</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Priority
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option disabled>Set priority</option>
                    <option value={0}>High</option>
                    <option value={1}>Medium</option>
                    <option value={2}>Low</option>
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
                    value={markdownContent}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div
                  id="markdownPreview"
                  className="w-full p-4 border rounded sm:col-span-2"
                  dangerouslySetInnerHTML={
                    !markdownContent
                      ? { __html: "Preview ..." }
                      : { __html: htmlContent }
                  }
                ></div>
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 mb-2"
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
