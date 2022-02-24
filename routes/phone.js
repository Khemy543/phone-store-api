const Product = require('../models/Phone');

const router = require('express').Router();

// Get all Product
router.get("/", async(req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create product
router.post("/add-phone", async(req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;