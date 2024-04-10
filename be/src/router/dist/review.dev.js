"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _review = require("../controller/review.js");

var reviewRouter = (0, _express.Router)();
reviewRouter.get("/getReviews", _review.getReviews);
reviewRouter.post("/getReview", _review.getReview);
reviewRouter.post("/createReview", _review.createReview);
reviewRouter["delete"]("/deleteReview", _review.deleteReview);
reviewRouter.get("/product/", _review.getReviewsByProduct);
var _default = reviewRouter;
exports["default"] = _default;