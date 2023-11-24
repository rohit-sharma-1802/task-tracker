const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    default: [],
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

module.exports = mongoose.model("user", userSchema);
