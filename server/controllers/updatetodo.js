//import the model (schema)
const todo = require("../models/todo");

//define route handler ---
exports.updatetodo = async(req,res) =>{
    try
    {
        //fetch ids 
        const {id}=req.params; //parameter se fetch hoga id
        const {title,description} =req. body;


        //---fetch all todo items from database---.
        const todos = await todo.findBYIdandUpdate(
            {_id:id},
            {title,description,updatedAt: Date.now()},
        )

        // response
            res.status(200).json({
                success:true,
                data:todos,
                message:'updated successfully',
            });
        }
        catch(err)
        {
            console.error(err);
            console.log(err);
            res.status(500).json({ // 500 internal server show
                success:false,
                error: err.message,
                message :"internal server error",
            }); 
        }
    }

 