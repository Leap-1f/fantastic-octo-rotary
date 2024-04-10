"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = exports.getOrders = exports.getOrder = void 0;

var _orderModel = require("../../model/order.model.js");

// this gets a specific order by id.
var getOrder = function getOrder(req, res) {
  var id, order;
  return regeneratorRuntime.async(function getOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.body.id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_orderModel.Order.findone({
            _id: id
          }));

        case 4:
          order = _context.sent;

          if (order) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: "Order not found"
          }));

        case 7:
          return _context.abrupt("return", res.status(200).json(order));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json({
            message: "Internal server error"
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; // this gets all orders.


exports.getOrder = getOrder;

var getOrders = function getOrders(req, res) {
  var orders;
  return regeneratorRuntime.async(function getOrders$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_orderModel.Order.find({}));

        case 3:
          orders = _context2.sent;

          if (orders) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "No orders found"
          }));

        case 8:
          return _context2.abrupt("return", res.status(200).json(orders));

        case 9:
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Internal server error"
          }));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}; // this creates a new order.


exports.getOrders = getOrders;

var createOrder = function createOrder(req, res) {
  var _req$body, user, phoneNumber, deliveryDate, OrderNumber, totalPrice, coupon, products, paymentMethod, paymentStatus, status, District, Khoroo, description, order;

  return regeneratorRuntime.async(function createOrder$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, user = _req$body.user, phoneNumber = _req$body.phoneNumber, deliveryDate = _req$body.deliveryDate, OrderNumber = _req$body.OrderNumber, totalPrice = _req$body.totalPrice, coupon = _req$body.coupon, products = _req$body.products, paymentMethod = _req$body.paymentMethod, paymentStatus = _req$body.paymentStatus, status = _req$body.status, District = _req$body.District, Khoroo = _req$body.Khoroo, description = _req$body.description;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_orderModel.Order.create({
            user: user,
            phoneNumber: phoneNumber,
            deliveryDate: deliveryDate,
            OrderNumber: OrderNumber,
            totalPrice: totalPrice,
            coupon: coupon,
            products: products,
            paymentMethod: paymentMethod,
            paymentStatus: paymentStatus,
            status: status,
            District: District,
            Khoroo: Khoroo,
            description: description
          }));

        case 4:
          order = _context3.sent;
          return _context3.abrupt("return", res.status(201).json(order));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).json({
            message: "Internal server error"
          }));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.createOrder = createOrder;