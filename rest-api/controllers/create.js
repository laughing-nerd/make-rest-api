const create = async (req, res) => {
  //Write POST logic here...
  //const data = await mongoclient.db(<DB_NAME>).collection(<COLLECTION_NAME>).insertOne({ <DATA TO BE INSERTED> }).toArray(); //This will store the data in the database
  //Example:
  //await mongoclient.db("test").collection("test").insertOne({ name:"abc", roll:123 });

  res.status(200).json({ message: "POST Method" });
}

module.exports = create;

