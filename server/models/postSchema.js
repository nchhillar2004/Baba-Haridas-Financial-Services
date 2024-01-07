const mongoose = require("mongoose");
const validator = require("validator");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
    },
    description: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 500,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: false,
    },
});

const Posts = new mongoose.model("POST", postSchema);
module.exports = Posts;