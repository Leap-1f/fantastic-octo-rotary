import mongoose from "mongoose";
// Will calculate the stars on a product when a review is added and then average the stars of all reviews for a product.
const ReviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Review = mongoose.model("Review", ReviewSchema);
