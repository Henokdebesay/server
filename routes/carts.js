const express = require("express");

const router = express.Router();

let carts = [
    {
        name: "Senait",
        item: "Milk",
        id: 1
    }, 
    {
        name: "John",
        item: "Chocolate",
        id: 2
    },
    {
        name: "David",
        item: "Eggs",
        id: 3
    }
]
router.get('/', (req,res) => {
    res.send(carts)

})


router.post('/', (req,res) => {
    const cart = req.body;
    carts.push(cart);
    res.send(`${cart.name}`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id); // Convert id to a number

    // Use triple equals (===) for comparison
    const mainCart = carts.find(cart => cart.id === numericId);

    res.send(mainCart)
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    const numericId = parseInt(id);

     carts = carts.filter(cart => cart.id !== numericId)
 
     res.send(`shopper with ${numericId} ID is deleted`)
 })

 router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { name, item } = req.body
    const numericId = parseInt(id);

    const cart = carts.find(cart => cart.id === numericId);
 
     if (name) {
        cart.name = name;
     }
     if (cart) {
        cart.item = item;
     }

     res.send(`Shopper ${numericId} has updated`)
 })


module.exports = router;