var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Campground Schema Setup

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

// Campground Model

var Campground = mongoose.model("Campground", campgroundSchema);

// ROOT route, Landing Page:
app.get("/", function(req, res){
    res.render("landing");
});

// INDEX Route, show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB and then render the file.
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            // {passing in : name to give it}
            res.render("index", {campgrounds:allCampgrounds});
        }
    })

});

// CREATE route, add new campground to DB
app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
 var name = req.body.name;
 var image = req.body.image;
 var description = req.body.description;
 var newCampground = {name: name, image: image, description:description};
 // Create a new campground and save to DB
 Campground.create(newCampground, function(err, newlyCreatedCampground){
     if(err){
         console.log("On the new form: " + err);
     } else {
         console.log(newlyCreatedCampground);
         // redirect back to campgrounds page 
        res.redirect("/campgrounds");
     }
 });
 
  
});


// NEW route, show form to create new campground
app.get("/campgrounds/new", function(req, res){
   res.render("new"); 
});

//SHOW route, show info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log("There was an error in the SHOW route: " + err);
       } else {
             //render show template with that campground
             res.render("show", {campground: foundCampground});
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started.");
});