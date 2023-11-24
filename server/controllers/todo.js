// controllers/todoController.js

const User = require("../models/user");

// todo controller
const addTodo = async (req, res) => {
  try {
    const { email, todos } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.todos.push(...todos);
    await user.save();

    res.status(201).json({ message: "Todos added successfully" });
  } catch (error) {
    console.error("Error adding todos:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to update a todo for a user
const updateTodo = async (req, res) => {
  try {
    const { email, todos } = req.body;
    console.log(todos);
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (todos.length > 0) {
      user.todos = todos;
      await user.save();
      res.status(200).json({ message: "Todos updated successfully" });
    } else {
      res.status(400).json({ message: "New todos array is empty" });
    }
  } catch (error) {
    console.error("Error updating todos:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const todos = user.todos;

    res.status(200).json({ todos });
  } catch (error) {
    console.error("Error getting todos:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addTodo, updateTodo, getAllTodos };
