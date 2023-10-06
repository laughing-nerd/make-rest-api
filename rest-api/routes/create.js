const express = require("express");
const create = require("../controllers/create.js"); //Importing the delete controller

const routes = express.Router();

//Setup the create route
//This basically sets up the /create endpoint and executes the 'create' function
routes.route("/").post(create);

module.exports = routes;
