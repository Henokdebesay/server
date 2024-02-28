const express = require("express");

const router = express.Router();

let reviews = [
    {
        name: "Senait",
        comments: "You should definitely shop from these guys",
        id: 1
    }, 
    {
        name: "Senait",
        comments: "Best buy ever",
        id: 2
    },
    {
        name: "Senait",
        comments: "10 out of 10, definitely coming back again",
        id: 2
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
    const numericId = parseInt(id);

     shoppers = shoppers.filter(shopper => shopper.id !== numericId)
 
     res.send(`shopper with ${numericId} ID is deleted`)
 })

 router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { name, country, age } = req.body
    const numericId = parseInt(id);

    const shopper = shoppers.find(shopper => shopper.id === numericId);
 
     if (name) {
        shopper.name = name;
     }
     if (country) {
        shopper.country = country;
     }
     if (age) {
        shopper.age = age;
     }

     res.send(`Shopper ${numericId} has updated`)
 })


module.exports = router;