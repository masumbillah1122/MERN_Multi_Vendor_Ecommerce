import mongoose from "mongoose";

//for create Table into DB for User
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true, //for date
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
