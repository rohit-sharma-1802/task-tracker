const express = require("express");
const router = express.Router();

//import controllers
const {login,signup} = require("../controllers/auth");
const {auth, isStudent,isAdmin} = require("../middlewares/auth");

//define api
router.post("/login",login);
router.post("/signup",signup);

//testing protected routes for single middleware
router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

//Protected Route
router.get("/student", auth, isStudent, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;
