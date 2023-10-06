const mongoclient = require("../dbConnect.js");
const read = async (req, res) => {
  //Write your read logic here...
  //const data = await mongoclient.db(<DB_NAME>).collection(<COLLECTION_NAME>).find({ <SEARCH FILTER IF ANY> }).toArray(); //This will give search result from the database and will store as an array
  //Example:
  //const data = await mongoclient.db("test").collection("test").find().toArray();

  res.status(200).json({ message: "GET Method" });
}

module.exports = read;
