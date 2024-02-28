const express = require("express");

const router = express.Router();

const shoppers = [
    {
        name: "Senait",
        county: "Mxico",
        age: 32,
        id: 1
    }, 
    {
        name: "John",
        county: "Mali",
        age: 23,
        id: 2
    },
    {
        name: "David",
        county: "Germany",
        age: 24,
        id: 3
    }
]
router.get('/', (req,res) => {
    res.send(shoppers)

})


router.post('/', (req,res) => {
    const shopper = req.body;
    shoppers.push(shopper);
    res.send(`${shopper.name}`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id); // Convert id to a number

    // Use triple equals (===) for comparison
    const mainShopper = shoppers.find(shopper => shopper.id === numericId);

    res.send(mainShopper)
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
 
     shoppers = shoppers.filter((shopper)=> {
         shopper.id !== id
    })
 
     res.send(`shopper with ${id} is deleted`)
 })


module.exports = router;