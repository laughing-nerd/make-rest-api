const update = async (req, res) => {
  //Write PATCH or PUT logic here...
  //const data = await mongoclient.db(<DB_NAME>).collection(<COLLECTION_NAME>).updateOne({ FILTER }, { REPLACE_WITH }) //This will update the document with REPLACE_WITH

  res.status(200).json({ message: "PACTH or PUT Method" });
}

module.exports = update;

