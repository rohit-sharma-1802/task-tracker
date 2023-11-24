// --- Import the model (schema) ---
// const Todo = require("../models/todo");


// // ---- Define route handler ----
// exports.createTodo = async (req, res) => {
//     try {
//       const Todo = new Todo(req.body);
//       await Todo.save();
//       res.status(201).json(Todo);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };

// exports.getTodo = async (req, res) => {
//   try {
//     const Todos = await Todo.find();
//     res.json(Todos);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const Todo = require('../models/todo');

// Controller to handle the logic for creating a new todo
exports.createTodo = async (req, res) => {
    try {
      const newTodo = new Todo(req.body);
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Controller to handle the logic for getting all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = exports;

























// exports.createtodo = async(req,res) =>{
//     try
//     {
//         //  Extract title and description from request body.
//         const {title,description} = req.body;

//         //---Create a todo object and insert into DB---.
//         const response = await todo.create({title,description});

//         // send a json response with a success flag !!
//             res.status(200).json({
//                 success:true,
//                 data: response,
//                 message:'Entry created successfully',
//             });
//         }
//         catch(err)
//         {
//             console.error(err);
//             console.log(err);
//             res.status(500).json({ // 500 internal server show
//                 success:false,
//                 data:"internal server error",
//                 message :'err.message',
//             }); 
//         }
//     }
