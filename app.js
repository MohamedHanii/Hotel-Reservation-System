var express = require("express");
var app = express();
var path = require("path");
var mysql = require('mysql');
var pageRouter = require("./routes/pages");


app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.set('views',path.join(__dirname,"views"));
app.set("view engine","ejs");

// http://localhost:3000/ Run from here

//routes
app.use('/',pageRouter);

// app.get("/", function (req,res){
//     res.render("home");
// });

app.use((req,res,next)=>{
    var err = new Error("page Not found");
    err.status=404;
    next(err);

});
app.use((err,re,res,next)=>{
    res.status(err.status||500);
    res.send(err.message);
});

// enivorment variable (3000) 
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });

  module.exports=app;

