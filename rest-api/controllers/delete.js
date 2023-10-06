const del = async (req, res) => {
  //Write DELETE logic here...
  //const data = await mongoclient.db(<DB_NAME>).collection(<COLLECTION_NAME>).deleteOne({ <FILTER> }) //This will delete the data
  //Example:
  //await mongoclient.db("test").collection("test").deleteOne({ _id:123 });
  //This will delete the document whose id is 123

  res.status(200).json({ message: "DELETE Method" });
}

module.exports = del;
