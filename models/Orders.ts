import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total:{
      type:Number,
      required: true,
    },
    status: {
      type: Number, // 0,1,2,3 in order page
      default: 0,
    },
    method: {
      type: Number, // if cash 0 or visa 1
      required:true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema); //condition if product found inside the mongodb can't create it another time 
