const mongoose = require("mongoose");

require("dotenv").config();
//mongodb-atlas
//const url="mongodb://rashi3909:rashi1998@ac-yfvorhr-shard-00-00.bdgupsz.mongodb.net:27017,ac-yfvorhr-shard-00-01.bdgupsz.mongodb.net:27017,ac-yfvorhr-shard-00-02.bdgupsz.mongodb.net:27017/?ssl=true&replicaSet=atlas-n90j19-shard-0&authSource=admin&retryWrites=true&w=majority";

//   ------------- Mongodb compass(app se) ----------------
//const url="mongodb://0.0.0.0:27017/Standalone";
//cluster is standalone so need to add this and add ip address 0.0.0.0


exports.connect = () => {
    mongoose.connect("mongodb+srv://rashi3909:rashi1998@cluster0.bdgupsz.mongodb.net/",{
        useNewUrlParser : true,
        useUnifiedTopology:true
    })

    .then(()=>{
        console.log("db connected sucessfully")
    })
    .catch( (err)=>{
        console.log("DB connection issues");
        console.log(err);
        process.exit(1);
    });
}