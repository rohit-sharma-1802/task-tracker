const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  todos: [
    {
      id: {
        type: Number,
        required: true,
      },
      todoName: {
        type: String,
        required: true,
        default: "newly created",
      },
      title: {
        type: String,
        required: true,
      },
      imageurl: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      priority: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
