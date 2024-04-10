import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  products: { type: [mongoose.Schema.Types.ObjectId], ref: "Product" },
});

export const Category = mongoose.model("Category", CategorySchema);
