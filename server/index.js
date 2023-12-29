const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
})