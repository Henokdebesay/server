const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const shoppersRoutes = require('./routes/shoppers.js');
const cartsRoutes = require('./routes/carts.js');
const reviewsRoutes = require('./routes/reviews.js');

const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // 
};

app.use(bodyParser.json());

app.use(requestLogger);

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get('', (req, res) => {
    res.render("index", { text: "Here at John & John, we love our customers!" });
});

app.use("/shoppers", shoppersRoutes);
app.use("/carts", cartsRoutes);
app.use("/reviews", reviewsRoutes);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});