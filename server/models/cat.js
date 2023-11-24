const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
    cat: 
    [{
        type: String,
    }]
    });
module.exports=mongoose.model("category",catSchema);