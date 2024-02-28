const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(PORT, ()=>{

    console.log(`Server running on port: ${PORT}`)
})

app.get("/", (req, res)=>{
    res.send('Hello')
})

