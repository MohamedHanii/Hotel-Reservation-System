var express = require("express");
var router = express.Router();
const db = require("../core/database");
var Hotel =  require("../models/Hotel.js");
var User = require("../models/User");


router.get('/',(req,res,next)=>{
    User.findAll()
    .then(users=>{
        res.send(users);
        // res.sendStatus(200);
    })
    .catch(err=>console.log(err))
});
router.get("/home",(req,res,next)=>{
    res.send("home");
});
router.get("/search",(req,res,next)=>{
    res.json(req.body);
});
router.post("/search",(req,res,next)=>{
    // Hotel.find(req.body)
    res.json(req.body);
});
module.exports = router;