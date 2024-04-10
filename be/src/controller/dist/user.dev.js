"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.createUser = void 0;

var _userModel = require("../../model/user.model.js");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saltRounds = 10;

function hashPassword(ePassword) {
  var password, salt, hashedPassword;
  return regeneratorRuntime.async(function hashPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          password = ePassword;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_bcrypt["default"].genSalt(saltRounds));

        case 4:
          salt = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, salt));

        case 7:
          hashedPassword = _context.sent;
          return _context.abrupt("return", hashedPassword);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          throw new Error("Error hashing password");

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
} // Use when creating a new user.
// This is the registration function.


var createUser = function createUser(req, res) {
  var _req$body, name, email, password, hashedPassword, user;

  return regeneratorRuntime.async(function createUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(hashPassword(password));

        case 4:
          hashedPassword = _context2.sent;
          user = new _userModel.User({
            name: name,
            email: email,
            password: hashedPassword
          });
          _context2.next = 8;
          return regeneratorRuntime.awrap(user.save());

        case 8:
          res.status(201).json({
            message: "User created successfully"
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          res.status(400).json({
            message: _context2.t0.message
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 11]]);
}; // This is the login function.


exports.createUser = createUser;

var loginUser = function loginUser(req, res) {
  var _req$body2, email, password, user, isPasswordCorrect, token;

  return regeneratorRuntime.async(function loginUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_userModel.User.findOne({
            email: email
          }));

        case 4:
          user = _context3.sent;

          if (user) {
            _context3.next = 7;
            break;
          }

          throw new Error("User not found");

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(_bcrypt["default"].compare(password, user.password));

        case 9:
          isPasswordCorrect = _context3.sent;

          if (isPasswordCorrect) {
            _context3.next = 12;
            break;
          }

          throw new Error("Invalid password");

        case 12:
          // const token = await user.generateToken();
          token = {
            name: "lolwut"
          };
          res.status(200).json({
            token: token
          });
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](1);
          res.status(400).json({
            message: _context3.t0.message
          });

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.loginUser = loginUser;