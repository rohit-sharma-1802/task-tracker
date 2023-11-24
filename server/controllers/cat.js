const User = require("../models/user");

exports.createCategory = async (req, res) => {
  try {
    const { email, category } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user is found
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the categories array
    user.categories.push(category);

    // Save the updated user
    const updatedUser = await user.save();

    res.json({ message: "Category added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserCategories = async (req, res) => {
  try {
    const { email } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user is found
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Extract and return the categories array of the user
    const userCategories = user.categories || [];
    res.json(userCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteUserCategories = async (req, res) => {
  try {
    const { email, category } = req.body;

    if (!email || !category) {
      return res.status(400).json({ message: "Invalid parameters" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $pull: { categories: category } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = exports;
