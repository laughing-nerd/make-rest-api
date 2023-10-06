require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

//Change your DB_URI in .env file
const mongoclient = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const connection = async () =>{
  try{
    await mongoclient.connect();
    console.log("Connected to database!");
  }
  catch(error){
    console.log(error);
  }
}

connection();

module.exports = mongoclient;
