//routes tells kis path ko kis controller se map krna chahte hain!!
const express = require("express");
const router = express.Router();

//... Import controllers ...
const {createTodo,getAllTodos} = require("../controllers/todo"); //create is post request
// const {gettodo,gettodobyId} = require("../controllers/gettodo");//get is get request
// const {updatetodo} = require("../controllers/updatetodo"); //update is put request jisme update todo ke baad id dalemge!!
// const {deletetodo} = require("../controllers/deletetodo");//delete is delete type of request


//...define the api routes....
router.post("/createtodo",createTodo);
router.get("/gettodo",getAllTodos);

module.exports = router;


// router.get("/gettodo/:id",gettodobyId);
// router.post("/updatetodo/:id",updatetodo);//path se controller map krre hain!!
// router.get("/deletetodo/:id",deletetodo);

router.get("/", (req,res) =>{
    res.send('<h1> This is homepage</h1>');
});