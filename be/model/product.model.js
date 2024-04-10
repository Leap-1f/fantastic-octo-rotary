import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,

      // image url
      // https://images.unsplash.com/photo-1500648799150-ef5bd3ee4e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
    },
    discountPrecent: {
      type: Number,
      required: true,
      // If it is 0 show no discount at  all on the frontend. But always have the value in the model.
    },
    thumbnail: {
      type: String,
      required: true,
      default: "Pertzival",
    },
    viewCount: {
      type: Number,
      default: 0,
      // Not sure how to implement this. Maybe when a user views the product, we send a request to the server to update the view count.
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    stars: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", ProductSchema);
