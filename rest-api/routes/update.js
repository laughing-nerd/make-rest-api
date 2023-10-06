const express = require("express");
const update = require("../controllers/update.js"); //Importing the delete controller

const routes = express.Router();

//Setup the update route
//This basically sets up the /update endpoint and executes the 'update' function
routes.route("/").patch(update);

//You can also use PUT instead of PATCH
//routes.route("/").put(update);

module.exports = routes;
