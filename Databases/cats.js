var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

//schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
// model
var Cat = mongoose.model("Cat", catSchema);



//1.  add a new cat to the db

// var mister = new Cat({
//     name: "Morgana",
//     age: 5,
//     temperament: "Diabolical"
// });

// mister.save(function(err, cat){
//         if(err){
//         console.log("Something went wrong. ~!")
//     } else {
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Dan",
   age: 15,
   temperament: "hungry"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});


//2. retrieve all cats from the db and console.log each one.

Cat.find({}, function(err, cats){
   if(err){
       console.log("Oh no, error! " + err);
   } else {
       console.log("All the cats: " + cats);
   }
});