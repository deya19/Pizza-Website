import dbConnect from "../../../lib/dbconnect";
import Orders from "../../../models/Orders";


const handler = async (req,res) =>{
  const {method} = req;

  await dbConnect();

  if(method === "GET"){
    try {
      const products = await Orders.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
   }

  if(method === "POST"){
    try {
      const order = await Orders.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default handler;