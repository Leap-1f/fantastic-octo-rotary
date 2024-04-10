"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("./src/router/user.js"));

var _product = _interopRequireDefault(require("./src/router/product.js"));

var _order = _interopRequireDefault(require("./src/router/order.js"));

var _review = _interopRequireDefault(require("./src/router/review.js"));

var _category = _interopRequireDefault(require("./src/router/category.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importing the routes
_dotenv["default"].config();

var port = 8080;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());

_dotenv["default"].config(); //using the routes


app.use("/user", _user["default"]);
app.use("/product", _product["default"]);
app.use("/order", _order["default"]);
app.use("/review", _review["default"]);
app.use("/category", _category["default"]); // dotenv configuration.

var _process$env = process.env,
    DBUSER = _process$env.DBUSER,
    DBPASS = _process$env.DBPASS,
    CLOUDINARYSECRET = _process$env.CLOUDINARYSECRET,
    CLOUDINARYKEY = _process$env.CLOUDINARYKEY,
    CLOUDINARYUSER = _process$env.CLOUDINARYUSER,
    EMAILUSER = _process$env.EMAILUSER,
    EMAILPASS = _process$env.EMAILPASS,
    EMAILTOKEN = _process$env.EMAILTOKEN; // cloudinary.config({
//   cloud_name: CLOUDINARYUSER,
//   api_key: CLOUDINARYKEY,
//   api_secret: CLOUDINARYSECRET,
// });

var transport = _nodemailer["default"].createTransport({
  service: "Mail.ru",
  auth: {
    user: EMAILUSER,
    pass: EMAILTOKEN,
    auth: EMAILPASS
  }
});

var MONGO_CONNECTION_STRING = "mongodb+srv://".concat(DBUSER, ":").concat(DBPASS, "@foodapp.pk3ugl6.mongodb.net/");

_mongoose["default"].connect(MONGO_CONNECTION_STRING).then(function () {
  console.log("Connected to MongoDB");
})["catch"](function (err) {
  console.error("Error connecting to MongoDB: ", err);
}); // mongodb connection
// cloudinary.api.resources(function (error, result) {
//   if (error) {
//     console.error("Error retrieving Cloudinary resources:", error);
//   } else {
//     const imageUrls = result.resources.map((resource) => resource.secure_url);
//   }
// });
//cloudinary connection
// Initialize the app


app.get("/", function (req, res) {
  res.send("Hello World!");
}); // app listening

app.listen(port, function () {
  console.log("Your server is on on the port \"http:localhost:".concat(8080, "\""));
});