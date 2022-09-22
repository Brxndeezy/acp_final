import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://BrandonHarlies:acp123@acp-cluster.uy7vxhl.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const auth = db.collection("acp-cluster");

    const result = await auth.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: "Data inserted successfully"})
  }
}
