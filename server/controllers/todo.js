// controllers/todoController.js

const User = require("../models/user");
const Todo = require("../models/todo");

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
    const { email } = req.params;
    const { todoName, updatedTodo } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const todoIndex = user.todos.findIndex(
      (todo) => todo.todoName === todoName
    );

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    user.todos[todoIndex] = updatedTodo;

    await user.save();

    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    console.error("Error updating todo:", error.message);
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

const deleteTodo = async (req, res) => {
  try {
    const { email, id } = req.body;

    // Find the user by email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the index of the todo to delete
    const todoIndex = user.todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Remove the todo from the array
    user.todos.splice(todoIndex, 1);

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addTodo, updateTodo, getAllTodos, deleteTodo };
