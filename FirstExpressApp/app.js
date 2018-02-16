var express = require("express");
var app = express();

// app.whatever

// ROUTES
// "/" => "Hi there!"
// "/bye" => "Goodbye!"
// "/dog" => "Bark bark!"
// app.get (route, func(request, response){})

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dogs", function(req, res){
    res.send("Bark bark!");
});

//making a pattern
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " subreddit!");
    
});

//splat route     
app.get("*", function(req, res){
   res.send("YOU ARE A STAR!!!"); 
});



// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});