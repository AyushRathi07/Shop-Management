var Shop = require('../models/shop');
const express = require("express");
const router = express.Router();

router.get('/shops', (req,res) => {
    Shop.find({})
        .then((shops) => {
            res.render("shops/shops.ejs",{shops: shops});
        })
        .catch((err) => res.status(400).json("" + err));
})

router.get('/shops/:id', (req,res) => {
    Shop.findById(req.params.id)
    .then((shop) => res.render("shops/show.ejs",{shop : shop}))
    .catch((err) => res.status(400).json("" + err));
})

router.get('/shops/new',(req,res) => {
    res.render("shops/new.ejs");
})

router.post('/shops',(req,res) => {
    var newshop = req.body;
    Shop.create(newshop)
    .then((newshop) => {
        console.log("New record " + newshop);
        res.redirect('/shops');
    })
    .catch((err) => res.status(400).json("" + err));
})

module.exports = router;

