const express = require('express');
const router = express.Router();
const Product = require('../model/Product'); // Assuming this is your Product model

// Route to fetch and display products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();  // Fetch products from MongoDB
        res.render('index', { products });  // Pass the products to the 'index.ejs' view
    } catch (err) {
        console.error(err);
        res.render('index', { products: [] });  // Pass an empty array in case of error
    }
});



module.exports = router;
