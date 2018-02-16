var express = require("express");
var app = express();

// app.whatever

// ROUTES
// "/" => "Hi there!"
// "/bye" => "Goodbye!"
// "/dog" => "Bark bark!"
// app.get (route, func(request, response){
    // response.send("MESSAGE!"});

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink!",
        cow: "Moo!",
        dog: "Woof woof!",
        cat: "Meow!",
        horse: "Neigh!!",
        goldfish: "..."
    }
    
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});


app.get("/repeat/:word/:number", function(req, res){
    var num = Number(req.params.number);
    var word = req.params.word;
    var result = " ";
    
   for(var i = 0; i < num; i++){
       result += word + " "; 
   }
   res.send(result);
});

//splat route     
app.get("*", function(req, res){
   res.send("Sorry, page not found... :( "); 
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});

// Problem: speak/pizza says, "The pizza says 'undefined'" hahahaa