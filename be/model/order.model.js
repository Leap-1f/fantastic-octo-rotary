import mongoose from "mongoose";
import {
  ORDER_PROCESS,
  ORDER_PAYMENT,
  ORDER_PAYMENT_METHOD,
} from "../constant/order.constants";
const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    OrderNumber: {
      type: Number,
      required: true,
      // This is the order number that will be shown on all ends. Most useful on the admin dashboard. Maybe a random number? or iterate through numbers.
    },
    totalPrice: {
      type: Number,
      required: true,
      // Calculate this at the frontend? or in the backend?
    },
    coupon: {
      type: String,
      required: true,
      // maybe this will need to be a array instead of just a string due to the different coupons.
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: Object.values(ORDER_PAYMENT_METHOD),
      // QPay, SocialPay, Credit Card, Cash
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: Object.values(ORDER_PAYMENT),
      // Paid, Unpaid
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(ORDER_PROCESS),
      // Ordered, PreparingToShip, Shipped, Delivered
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
