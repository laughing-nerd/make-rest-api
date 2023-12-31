//Get started
//This is index.js and this will be the entry point for your REST API
//As of now, this project only supports mongoDB. I'll be adding more database support in future
//Go to .env file in the project's root and update DB_URI with your mongoDB connection string
//As you might have noticed, I've not created a directory that could possibly contain database schemas.
//That's because I wanted to keep it simple and not use mongoose. If you want you can change the project accordingly.
//The folder structure is simple. "routes" contain the files necessary for handling API routes
//Every API route has to call a function to work. And those functions are defined in "controllers"
//Most of the time you will be working with controllers because that's where all your functions will be present


const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = process.env.PORT || 5000; //This is the port on which the server will be listening to incoming requests. You can change the value 5000 to anything of your choice. It is recommened not to change process.env.PORT
const app = express();

app.use(cors());

//Setting up routes
//You won't have to manually add every route here in case you decide to add a new route in 'routes' directory
//Endpoint will be like /api/read ot /api/delete etc
const files = fs.readdirSync("./routes/");
for (const file of files)
{
  const filename = file.substring(0,file.length-3);
  app.use(`/api/${filename}`, require(`./routes/${filename}`));
}

//Set up a default route
app.get("/", (req, res)=>{
  res.status(200).send("Default Route...");
});

//Server will be listening on port 5000. You can change the port number by changing the value of 'PORT'
try{
  app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
  });
}
catch(error){
  console.log(error);

}
