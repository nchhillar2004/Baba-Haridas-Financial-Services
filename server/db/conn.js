const mongoose = require("mongoose");

const URI = process.env.DATABASE_URI;
const NAME = process.env.DATABASE_NAME;

mongoose
    .connect(URI)
    .then(() => console.log("➜ Database connected: "+ NAME))
    .catch((error) => console.log("➜ Database connection error: " + error.message));
