
//routes tells kis path ko kis controller se map krna chahte hain!!
const express = require("express");
const router = express.Router();

const {createCategory,getAllCategories} = require("../controllers/cat");


router.post("/createcategory",createCategory);
router.get("/getcategory",getAllCategories);

module.exports = router;
