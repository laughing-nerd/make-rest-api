const express = require("express");
const read = require("../controllers/read.js"); //Importing the read controller

const routes = express.Router();

//Setup the read route
//This basically sets up the /read endpoint and executes the 'read' function
routes.route("/").get(read);

module.exports = routes;
