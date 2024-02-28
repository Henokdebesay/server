const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const shoppersRoutes = require('./routes/shoppers.js')


app.use(bodyParser.json())
app.use("/shoppers", shoppersRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})

app.get("/", (req, res)=>{
    res.send('Hello')
})

