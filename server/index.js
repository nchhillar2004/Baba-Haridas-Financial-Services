require("dotenv").config();
require('./db/conn');

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/router');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser(""));
app.use(router);


app.listen(PORT, ()=>{
    console.log("➜ Server is running on port: " + PORT);
})
