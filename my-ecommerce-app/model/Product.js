const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create the Product model
module.exports = mongoose.model('Product', productSchema);
