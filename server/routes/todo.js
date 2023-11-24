const express = require("express");
const router = express.Router();
const { addTodo, updateTodo, getAllTodos } = require("../controllers/todo");
router.post("/createtodo", addTodo);
router.post("/updatetodo", updateTodo);
router.post("/getalltodo", getAllTodos);
module.exports = router;

router.get("/", (req, res) => {
  res.send("Hello from the server");
});
