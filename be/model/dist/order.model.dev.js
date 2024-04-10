"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _order = require("../constant/order.constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OrderSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true //

  },
  postalCode: {
    type: String,
    required: true
  },
  OrderNumber: {
    type: Number,
    required: true // This is the order number that will be shown on all ends. Most useful on the admin dashboard. Maybe a random number? or iterate through numbers.

  },
  totalPrice: {
    type: Number,
    required: true // Calculate this at the frontend? or in the backend?

  },
  coupon: {
    type: String,
    required: true // maybe this will need to be a array instead of just a string due to the different coupons.

  },
  products: {
    type: [_mongoose["default"].Schema.Types.ObjectId],
    ref: "Product",
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
    "enum": Object.values(_order.ORDER_PAYMENT_METHOD) // QPay, SocialPay, Credit Card, Cash

  },
  paymentStatus: {
    type: String,
    required: true,
    "enum": Object.values(_order.ORDER_PAYMENT) // Paid, Unpaid

  },
  status: {
    type: String,
    required: true,
    "enum": Object.values(_order.ORDER_PROCESS) // Ordered, PreparingToShip, Shipped, Delivered

  },
  District: {
    type: String,
    required: true,
    "enum": Object.values(_order.Districts)
  },
  Khoroo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var Order = _mongoose["default"].model("Order", OrderSchema);

exports.Order = Order;