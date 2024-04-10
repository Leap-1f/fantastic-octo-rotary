"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _category = require("../controller/category.js");

var categoryRouter = (0, _express.Router)();
categoryRouter.get("/", _category.getCategories);
categoryRouter.get("/:id", _category.getCategory);
categoryRouter.post("/", _category.createCategory);
categoryRouter["delete"]("/:id", _category.deleteCategory);
var _default = categoryRouter;
exports["default"] = _default;