var express = require("express");
var app = express();


// http://localhost:3000/ Run from here


// reg is object that 
app.get("/", function (req,res){
    res.send("Hi There!");
});
app.get("/bye",function(req,res){
    res.send("goodbye!")
});
app.get("/dog", function (req,res){
    res.send("MEOW!");
});

// enivorment variable (3000) 
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });

