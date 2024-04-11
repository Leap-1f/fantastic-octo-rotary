"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = exports.updateProduct = exports.getProducts = exports.getProduct = void 0;

var _productModel = require("../../model/product.model.js");

// this gets a specific product by id.
// used when you click on a product icon in the frontend. works like http://localhost:8080/product/getProduct?id=idhere and just use map to href that. No double quoteation.
var getProduct = function getProduct(req, res) {
  var id, product, viewIncrease;
  return regeneratorRuntime.async(function getProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.query.id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_productModel.Product.findById(id));

        case 4:
          product = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_productModel.Product.findByIdAndUpdate(id, {
            $inc: {
              viewCount: 1
            }
          }));

        case 7:
          viewIncrease = _context.sent;

          if (product) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));

        case 10:
          return _context.abrupt("return", res.status(200).json(product));

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json({
            error: _context.t0.message
          }));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
}; // this gets all products.


exports.getProduct = getProduct;

var getProducts = function getProducts(req, res) {
  var products;
  return regeneratorRuntime.async(function getProducts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_productModel.Product.find({}));

        case 3:
          products = _context2.sent;

          if (products) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "No products found"
          }));

        case 8:
          return _context2.abrupt("return", res.status(200).json(products));

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
}; // If you need to get products by category then refer to the category controller.
// this updates a product with the body data.


exports.getProducts = getProducts;

var updateProduct = function updateProduct(req, res) {
  var _req$body, id, productName, description, price, image, discountPrecent, category, topCategory, product;

  return regeneratorRuntime.async(function updateProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, productName = _req$body.productName, description = _req$body.description, price = _req$body.price, image = _req$body.image, discountPrecent = _req$body.discountPrecent, category = _req$body.category, topCategory = _req$body.topCategory;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_productModel.Product.findOneAndUpdate({
            _id: id
          }, {
            productName: productName,
            description: description,
            price: price,
            image: image,
            discountPrecent: discountPrecent,
            category: category,
            topCategory: topCategory
          }));

        case 4:
          product = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(product));

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
}; // this creates a new product. Probably should make the image require and the thumbnail as optional. But for now it is not.


exports.updateProduct = updateProduct;

var createProduct = function createProduct(req, res) {
  var _req$body2, productName, description, price, image, discountPrecent, category, topCategory, quantityRemaining, product;

  return regeneratorRuntime.async(function createProduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, productName = _req$body2.productName, description = _req$body2.description, price = _req$body2.price, image = _req$body2.image, discountPrecent = _req$body2.discountPrecent, category = _req$body2.category, topCategory = _req$body2.topCategory, quantityRemaining = _req$body2.quantityRemaining;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_productModel.Product.create({
            productName: productName,
            description: description,
            price: price,
            image: image,
            discountPrecent: discountPrecent,
            category: category,
            topCategory: topCategory,
            quantityRemaining: quantityRemaining
          }));

        case 4:
          product = _context4.sent;
          return _context4.abrupt("return", res.status(201).json(product));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0.message
          }));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.createProduct = createProduct;