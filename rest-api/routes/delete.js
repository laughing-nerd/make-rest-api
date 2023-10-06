const express = require("express");
const del = require("../controllers/delete.js"); //Importing the delete controller

const routes = express.Router();

//Setup the delete route
//This basically sets up the /delete endpoint and executes the 'del' function
routes.route("/").delete(del);

module.exports = routes;
