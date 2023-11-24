const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    users: [
        {
          _id: { type: mongoose.Schema.Types.ObjectId },
          userId: { type: String },
          data: [
            {
              type: { type: String },
              priority: { type: Number},
              category: { type: String },
              description: { type: String, maxLength: 50 },
              imageurl: { type: String },
              title: { type: String, default: "User Title" },
            },
          ],
        },
      ],
    });
      module.exports=mongoose.model("Todo",TodoSchema); // todo is name of table shown in the database !!
      // title:{
      //     type: String,
      //     required: true,
      //     maxLength: 50,
      // },
      // image:{
      //     type:String,
      //     required:true,
      // },
      // category:{
      //     type: String,
      //     required:true,
      // },
      // priority:{
      //     type:String,
      //     required:true,
      // },
      // description:{
      //     type:String,
      //     required:true,
      //     maxLength: 50,
      // },
      // createdAt:{
      //     type:Date,
      //     required: true,
      //     default:Date.now(),
      // },
      // updatedAt:{
      //     type:Date,
      //     required: true,
      //     default:Date.now(),
      // }
     //});