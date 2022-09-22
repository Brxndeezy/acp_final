import connectMongo from "../../util/connectMongo.js";
import Users from "../../models/Users";

export default async function handler(req, res) {
  const { method } = req;
  await connectMongo();

  switch (method) {
    case "POST":
      try {
        const user = await Users.create(req.body);

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
