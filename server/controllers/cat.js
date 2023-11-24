const Category = require("../models/cat");

// Controller functions
exports.createCategory = async (req, res) => {
    try {
        const { cat } = req.body;
        const newCategory = new Category({ cat });
        const savedCategory = await newCategory.save();
        res.json(savedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = exports;
