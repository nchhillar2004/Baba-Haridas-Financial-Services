const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailsURL:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String,
    about:Object,
});

const Products = new mongoose.model("products", productSchema);

module.exports = Products;