const express = require("express");
const router = new express.Router();
const Products = require("../../models/productSchema");
const Users = require("../../models/userSchema");
const Posts = require("../../models/postSchema");
const bcrypt = require("bcryptjs");

// get posts data api
router.get("/posts", async (req, res) => {
    try {
        const postsData = await Posts.find();
        res.status(201).json(postsData);
    } catch (error) {
        console.log("Error in POSSTTSS" + error.message);
    }
});

// create new post
router.post("/newpost", async (req, res) => {
    const { title, description, imageUrl, date, author } = req.body;

    if (!title || !description) {
        res.status(422).json({ error: "FILL ALL THE DAAATTAA" });
        console.log("Fill title and description");
        return;
    }

    try {
        const finalPost = new Posts({
            title,
            description,
            imageUrl,
            date,
            author,
        });

        const storeData = await finalPost.save();
        res.status(201).json({
            message: "Posted successfully",
            data: storeData,
        });
    } catch (error) {
        console.log("Unable to post");
    }
});

// get products data api
router.get("/getproducts", async (req, res) => {
    try {
        const productsData = await Products.find();
        res.status(201).json(productsData);
    } catch (error) {
        console.log("ERRROORRRRRRRR IN PRODUCTSSSS" + error.message);
    }
});

// register user
router.post("/register", async (req, res) => {
    const { fname, mobile, email, password } = req.body;

    if (!fname || !mobile || !email || !password) {
        res.status(422).json({ error: "fill the all data" });
        console.log("no data available");
        return;
    }

    try {
        const preUser = await Users.findOne({ email: email });

        if (preUser) {
            res.status(409).json({ error: "user already exists" });
        } else {
            try {
                const finalUser = new Users({
                    fname,
                    mobile,
                    email,
                    password,
                });
                const storeData = await finalUser.save();
                res.status(201).json({
                    message: "User created successfully",
                    data: storeData,
                });
            } catch (error) {
                res.status(500).json({ error: "Server error" });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;