#YelpCamp
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image 

#Layout and Basic Styling
* Create header and footer partials
* Add in bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and New Campground Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so farm
* Add description to our campground model
* show db.collection.drop()
* Add a show route/template

RESTful routes
===================================================
Name of Route | URL | verb | description 
INDEX          /dogs   GET  Display a list of all dogs 
NEW         /dogs/new  GET  Displays form to make a new dog (submits to CREATE)
CREATE          /dogs  POST  Add new dog to database
SHOW        /dogs/:id   GET  Shows info about one dog 