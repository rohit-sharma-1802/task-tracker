import React, { useState } from "react";
import { HiPencilAlt, HiPlusCircle, HiTrash } from "react-icons/hi";

const Categories = () => {
  const [categories, setCategories] = useState([]);
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
    <div>
      <div>
        <div className="flex items-center py-4">
          <h4 className="text-3xl font-bold text-gray-600">
            Manage Categories
          </h4>
        </div>
        <section className="bg-white rounded-2xl">
          <div className="pt-3 pl-3">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 flex justify-center items-center gap-2"
              onClick={() => {
                setIsModalOpen(true);
                setSelectedCategory(null); // Set to null for adding a new category
              }}
            >
              New Category <HiPlusCircle />
            </button>
          </div>
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
            <table className="w-full border border-gray-300">
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
                        onClick={() => handleDeleteCategory(index)}
                        className="text-red-500"
                      >
                        <HiTrash />
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
                            updatedCategories[selectedCategory] =
                              e.target.value;
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
                      className="
                      text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center mt-1 mb-2"
                    >
                      {selectedCategory !== null ? "Update" : "Add"}
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="
                      text-white bg-black font-medium rounded-lg text-sm px-5 py-2 text-center mt-1 ml-3 mb-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
