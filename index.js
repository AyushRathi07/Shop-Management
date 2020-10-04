var express=require("express");
const PORT = 3000;
var app=express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var userRouter = require('./routes/user-routes');
var itemRouter = require('./routes/item-routes');
var shopRouter = require('./routes/shop-routes');
var methodOverride = require("method-override");
mongoose.connect("mongodb://localhost/Shop_management",{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});


app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine","ejs");

var User = require('./models/user');
var Shop = require('./models/shop');
var Item = require('./models/item');


app.get('/',(req,res) => res.render("landing.ejs"));
app.use('/',shopRouter);
app.use('/',userRouter);
app.use('/',itemRouter);

app.listen(PORT,(req,res) => {
    console.log("Server has started!");
})