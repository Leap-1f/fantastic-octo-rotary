"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _product = require("../controller/product.js");

var productRouter = (0, _express.Router)();
productRouter.get("/", _product.getProducts);
productRouter.get("/:id", _product.getProduct);
productRouter.post("/create", _product.createProduct);
productRouter.post("/update", _product.updateProduct);
var _default = productRouter;
exports["default"] = _default;