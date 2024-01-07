const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const Users = require("../models/userSchema");
const Posts = require("../models/postSchema");
const bcrypt = require("bcryptjs");

// get posts data api
router.get("/posts", async (req, res) => {
    try {
        const postsData = await Posts.find();
        console.log("Posts data fetched: " + postsData);
        res.status(201).json(postsData);
    } catch (error) {
        console.log("error" + error.message);
    }
});

// get products data api
// router.get("/getproducts", async (req, res) => {
//     try {
//         const productsData = await Products.find();
//         // console.log("console the data " + productsData);
//         res.status(201).json(productsData);
//     } catch (error) {
//         console.log("error" + error.message);
//     }
// });

module.exports = router;