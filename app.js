const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const shoppersRoutes = require('./routes/shoppers.js')
const cartsRoutes = require('./routes/carts.js')
const reviewsRoutes = require('./routes/reviews.js')

const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in the stack
};

app.use(bodyParser.json())

app.use(requestLogger);

app.use("/shoppers", shoppersRoutes)
app.use("/carts", cartsRoutes)
app.use("/reviews", reviewsRoutes)



app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})

app.get("/", (req, res)=>{
    res.send('Hello')
})

