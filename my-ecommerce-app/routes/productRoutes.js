const express = require('express');
const router = express.Router();
const Product = require('../model/Product');

// GET route for displaying the form at /products/add
router.get('/add', (req, res) => {
    res.render('addProduct');  // Renders the form for adding a new product
});

// POST route for handling form submission
router.post('/add', async (req, res) => {
    try {
        const { name, price, stock, description } = req.body;

        // Create a new product instance
        const newProduct = new Product({
            name,
            price,
            stock: stock === '1',  // Convert to boolean (In stock = true)
            description,
        });

        // Save the product to the database
        await newProduct.save();
  
        // Redirect to the form after saving
        res.redirect('/products/add');
       
    } catch (error) {
        console.error('Error while adding product:', error);
        res.status(500).send('Error while adding product');
    }
});

module.exports = router;
