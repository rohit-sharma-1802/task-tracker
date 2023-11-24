//routes tells kis path ko kis controller se map krna chahte hain!!
const express = require("express");
const router = express.Router();

const {
  createCategory,
  getUserCategories,
  deleteUserCategories,
} = require("../controllers/cat");

router.post("/createcategory", createCategory);
router.post("/getcategory", getUserCategories);
router.post("/deletecategory", deleteUserCategories);

module.exports = router;
