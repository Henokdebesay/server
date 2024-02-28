const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const shoppersRoutes = require('./routes/shoppers.js')
const cartsRoutes = require('./routes/carts.js')
const reviewsRoutes = require('./routes/reviews.js')



app.use(bodyParser.json())
app.use("/shoppers", shoppersRoutes)
app.use("/carts", cartsRoutes)
app.use("/reviews", reviewsRoutes)



app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})

app.get("/", (req, res)=>{
    res.send('Hello')
})

