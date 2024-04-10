"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = exports.deleteCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;

var _categoryModel = require("../../model/category.model.js");

var getCategories = function getCategories(req, res) {
  var categories;
  return regeneratorRuntime.async(function getCategories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_categoryModel.Category.find());

        case 3:
          categories = _context.sent;
          res.status(200).json(categories);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getCategories = getCategories;

var getCategory = function getCategory(req, res) {
  var category;
  return regeneratorRuntime.async(function getCategory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_categoryModel.Category.findById(req.params.id));

        case 3:
          category = _context2.sent;
          res.status(200).json(category);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json({
            message: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getCategory = getCategory;

var createCategory = function createCategory(req, res) {
  var name, category;
  return regeneratorRuntime.async(function createCategory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          name = req.body.name;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(new _categoryModel.Category.create({
            categoryName: name
          }));

        case 4:
          category = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(category.save());

        case 7:
          res.status(201).json(category);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          res.status(400).json({
            message: _context3.t0.message
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.createCategory = createCategory;

var deleteCategory = function deleteCategory(req, res) {
  var category;
  return regeneratorRuntime.async(function deleteCategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_categoryModel.Category.findByIdAndDelete(req.params.id));

        case 3:
          category = _context4.sent;
          res.status(200).json(category);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            message: _context4.t0.message
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteCategory = deleteCategory;

var getProducts = function getProducts(req, res) {
  var products;
  return regeneratorRuntime.async(function getProducts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_categoryModel.Category.findById(req.params.id).populate("products"));

        case 3:
          products = _context5.sent;
          res.status(200).json(products);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(400).json({
            message: _context5.t0.message
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getProducts = getProducts;