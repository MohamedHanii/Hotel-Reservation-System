var express = require("express");
var router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('home.ejs',{title:"My app"});
});
router.get("/home",(req,res,next)=>{
    res.send("home");
});
router.get("/search",(req,res,next)=>{
    res.json(req.body);
});
router.post("/search",(req,res,next)=>{
    res.json(req.body);
});
module.exports = router;