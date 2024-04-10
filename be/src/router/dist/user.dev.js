"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controller/user.js");

var userRouter = (0, _express.Router)();
userRouter.post("/register", _user.createUser);
userRouter.post("/login", _user.loginUser);
var _default = userRouter;
exports["default"] = _default;