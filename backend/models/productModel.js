import mongoose from "mongoose";

//for create Table into DB for User
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
    },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    sellerId: { type: String, required: true },
    seller: { type: String, required: true },
    sellerImage: { type: String, required: true },
  },
  {
    timestamps: true, //for date
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
