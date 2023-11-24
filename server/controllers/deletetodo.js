//import the model (schema)
const todo = require("../models/todo");


exports.gettodobyId = async(req,res) =>{
        try
        {
            //--extract todo items based on id---.
            const id = req.params.id; //fetch id
            await todo.findByIdAndDelete(id);
            
                res.json({
                    success:true,
                    message:'todo deleted',
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