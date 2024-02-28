const express = require("express");

const router = express.Router();

router.get('/shoppers', (req,res) => {
    res.send('hello customers')
})

module.exports = router;