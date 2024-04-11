"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CategorySchema = new _mongoose["default"].Schema({
  categoryName: {
    type: String,
    required: true
  }
});

var Category = _mongoose["default"].model("Category", CategorySchema);

exports.Category = Category;