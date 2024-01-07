const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({

});

const Products = new mongoose.model("PRODUCT", productSchema);
module.exports = Products;