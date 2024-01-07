require("dotenv").config();
require('./db/conn');

const express = require('express');
const app = express();
const cors = require('cors');
const appRouter = require('./routes/app/router');
const adminRouter = require('./routes/admin/router');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser(""));
app.use(appRouter);
app.use(adminRouter);

// Project by NISHANT CHHILLAR
const Products = require("./models/productSchema");
const productsData = require("./constant/constData");


// const DefaultData = async()=>{
//     try {
//         await Products.deleteMany({});

//         const storeData = await Products.insertMany(productsData);
//         console.log(storeData)
//     } catch (error) {
//         console.log("error" + error.message);
//     }
// }

app.listen(PORT, ()=>{
    console.log("➜ Server is running on port: " + PORT);
})