"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductStars = exports.deleteReview = exports.createReview = exports.getReview = exports.getReviewsByProduct = exports.getReviews = void 0;

var _reviewModel = require("../../model/review.model.js");

var _productModel = require("../../model/product.model.js");

var getReviews = function getReviews(req, res) {
  var reviews;
  return regeneratorRuntime.async(function getReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_reviewModel.Review.find());

        case 3:
          reviews = _context.sent;
          res.status(200).json(reviews);
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

exports.getReviews = getReviews;

var getReviewsByProduct = function getReviewsByProduct(req, res) {
  var id, reviews;
  return regeneratorRuntime.async(function getReviewsByProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.body.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_reviewModel.Review.find({
            product: id
          }));

        case 4:
          reviews = _context2.sent;
          res.status(200).json(reviews);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(400).json({
            message: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getReviewsByProduct = getReviewsByProduct;

var getReview = function getReview(req, res) {
  var id, review;
  return regeneratorRuntime.async(function getReview$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.body.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_reviewModel.Review.findById(id));

        case 4:
          review = _context3.sent;
          res.status(200).json(review);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(400).json({
            message: _context3.t0.message
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getReview = getReview;

var createReview = function createReview(req, res) {
  var _req$body, product, user, stars, comment, review;

  return regeneratorRuntime.async(function createReview$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, product = _req$body.product, user = _req$body.user, stars = _req$body.stars, comment = _req$body.comment;
          _context4.prev = 1;
          review = new _reviewModel.Review({
            product: product,
            user: user,
            stars: stars,
            comment: comment
          });
          _context4.next = 5;
          return regeneratorRuntime.awrap(review.save());

        case 5:
          res.status(201).json(review);
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.status(400).json({
            message: _context4.t0.message
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.createReview = createReview;

var deleteReview = function deleteReview(req, res) {
  var review;
  return regeneratorRuntime.async(function deleteReview$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_reviewModel.Review.findByIdAndDelete(req.params.id));

        case 3:
          review = _context5.sent;
          res.status(200).json(review);
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

exports.deleteReview = deleteReview;

var updateProductStars = function updateProductStars(req, res) {
  var id, reviewStarTotal, totalReviewNumber, totalStars, product;
  return regeneratorRuntime.async(function updateProductStars$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.body.id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_reviewModel.Review.find({
            product: id
          }));

        case 3:
          reviewStarTotal = _context6.sent;
          totalReviewNumber = reviewStarTotal.length;
          totalStars = reviewStarTotal.reduce(function (partialSum, a) {
            return partialSum + a;
          }, 0);
          _context6.prev = 6;
          _context6.next = 9;
          return regeneratorRuntime.awrap(_productModel.Product.findByIdAndUpdate(id, {
            $set: {
              stars: Math.round(totalStars / totalReviewNumber)
            }
          }));

        case 9:
          product = _context6.sent;
          res.status(200).json(product);
          _context6.next = 16;
          break;

        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](6);
          res.status(400).json({
            message: _context6.t0.message
          });

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[6, 13]]);
};

exports.updateProductStars = updateProductStars;