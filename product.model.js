const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    company: String
}, {
    timestamps: true
});

mongoose.model('products', productSchema);