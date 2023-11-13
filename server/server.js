// ---Server creation---
const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.PORT|| 8000;

app.use(express.json());

require("./config/database").connect();

const user = require("./routes/user");
app.use("/api/v1",user);

// //activate the server on 8000 port.

app.listen(port,()=>{
    console.log("server started at 8000 port")
})
