import React, { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState(["Category 1", "Category 2"]);
  const [newCategory, setNewCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = () => {
    // Add the new category to the list
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    // Close the modal
    setIsModalOpen(false);
    // Clear the new category input field
    setNewCategory("");
  };

  const handleUpdateCategory = (index) => {
    // Set the selected category for updating
    setSelectedCategory(index);
    // Open the modal
    setIsModalOpen(true);
  };

  const handleDeleteCategory = (index) => {
    // Remove the selected category from the list
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Button to open the modal */}
      <button
        onClick={() => {
          setIsModalOpen(true);
          setSelectedCategory(null); // Set to null for adding a new category
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Category
      </button>

      {/* Table displaying categories */}
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b">Category</th>
            <th className="border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="border-b">{category}</td>
              <td className="border-b">
                <button
                  onClick={() => handleUpdateCategory(index)}
                  className="text-blue-500 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteCategory(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding/updating a category */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white p-8 rounded-md z-20">
            <h2 className="text-xl font-bold mb-4">
              {selectedCategory !== null ? "Update" : "Add"} Category
            </h2>
            <input
              type="text"
              value={
                selectedCategory !== null
                  ? categories[selectedCategory]
                  : newCategory
              }
              onChange={(e) =>
                selectedCategory !== null
                  ? setCategories((prevCategories) => {
                      const updatedCategories = [...prevCategories];
                      updatedCategories[selectedCategory] = e.target.value;
                      return updatedCategories;
                    })
                  : setNewCategory(e.target.value)
              }
              className="border border-gray-300 p-2 mb-4 w-full"
              placeholder="Enter category name"
            />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  selectedCategory !== null
                    ? setSelectedCategory(null)
                    : handleAddCategory();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                {selectedCategory !== null ? "Update" : "Add"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
