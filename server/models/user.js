const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
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
      },
      todoName: {
        type: String,
        default: "newly created",
      },
      title: {
        type: String,
      },
      imageurl: {
        type: String,
      },
      category: {
        type: String,
      },
      priority: {
        type: Number,
      },
      description: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
