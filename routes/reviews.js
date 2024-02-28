const express = require("express");

const router = express.Router();

let reviews = [
    {
        name: "Senait",
        comment: "You should definitely shop from these guys",
        id: 1
    }, 
    {
        name: "Senait",
        comment: "Best buy ever",
        id: 2
    },
    {
        name: "Senait",
        comment: "10 out of 10, definitely coming back again",
        id: 2
    }
]
router.get('/', (req,res) => {
    res.send(reviews)

})


router.post('/', (req,res) => {
    const review = req.body;
    shoppers.push(review);
    res.send(`${review.name}`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id); // Convert id to a number

    // Use triple equals (===) for comparison
    const mainReview = reviews.find(review => review.id === numericId);

    res.send(mainReview)
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    const numericId = parseInt(id);

    reviews = reviews.filter(review => review.id !== numericId)
 
     res.send(`shopper with ${numericId} ID is deleted`)
 })

 router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { name, comment } = req.body
    const numericId = parseInt(id);

    const review = reviews.find(review => review.id === numericId);
 
     if (name) {
        review.name = name;
     }
     if (comment) {
        review.comment = country;
     }

     res.send(`Shopper ${numericId} has updated`)
 })


module.exports = router;