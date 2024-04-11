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
    stars: {
      type: Number,
      required: true,
      default: 0,
    },
    quantityRemaining: {
      type: Number,
      required: true,
    },
    category: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
      required: true,
    },
    topCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    // made because the product creation has the categories built in the frontend.
    tags: { type: Array },
    additionalInfo: { type: Array },
    soldAmount: { type: Number, default: 0 },
    // update this every time someone buys that product
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", ProductSchema);
