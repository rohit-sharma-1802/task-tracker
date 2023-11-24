//import the model (schema)
const todo = require("../models/todo");

//define route handler ---
exports.gettodo = async(req,res) =>{
    try
    {
        //---fetch all todo items from database---.
        const todos = await todo.find({});

        // response
            res.status(200).json({
                success:true,
                data:todos,
                message:'Entire todo data is fetched',
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


    exports.gettodobyId = async(req,res) =>{
        try
        {
            //--extract todo items based on id---.
            const id = req.params.id; //fetch id
            const todo = await todo.findById({_id:id});
            

            //data forgiven id not found
            if(!todo)
            {
                return res.status(404).json({
                    success:false,
                    data:todo,
                    message:'todo data is successfully fetched',
                });
            }

            //  ---response when data for given id found --
                res.status(200).json({
                    success:true,
                    message:" no data found with given id",
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