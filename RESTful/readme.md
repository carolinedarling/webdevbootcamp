#RESTful Routing

##Introduction
* Define REST and explain why it matters.
* List all 7 RESTful routes
* Show example of RESTful routing in practice


REST - a convention for mapping our HTTP routes and CRUD functionality

CREATE 
READ 
UPDATE 
DESTROY


#The 7 Restful Routes

Dogs:
0. Name, Path, HTTP, Purpose

1. Index, /dogs, GET, List all dogs
2. New, /dogs/new, GET, Show new dog form
3. Create, /dogs, POST, Create a new dog & redirect somewhere
4. Show, /dogs/:id, GET, Show info about one specific dog
5. Edit, /dogs/:id/edit, GET, Show edit form for one dog
6. Update, /dogs/:id, PUT, Update a particular dog & redirect somewhere
7. Destroy, /dogs/:id, DELETE, Delte and particular dog & redirect somewhere



#Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar



1. npm init
2. npm install express mongoose body-parser ejs --save
3. set up MongoDB (https://community.c9.io/t/setting-up/mongodb/1717)
4. require/set/use/connect everything:
5. set-up Schema
6. set-up model 