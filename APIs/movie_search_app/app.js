var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

// The Root Route -- Search
app.get('/', function(req, res) {
    res.render("search");
});



// The /results Route
app.get('/results', function(req, res){
    //input is named search
    var searchTerm = req.query.search; 
    var url = 'http://omdbapi.com/?s=' + searchTerm; 
    
   request(url, function(error, response, body){
      if (!error & response.statusCode == 200){
        var data = JSON.parse(body);
        res.render("results", {data: data});
    } 
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started.");
});