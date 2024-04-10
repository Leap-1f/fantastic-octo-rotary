import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cloudinary from "cloudinary";
import bcrypt from "bcrypt";

// Importing the routes
import userRouter from "./src/router/user";
import productRouter from "./src/router/product";
import orderRouter from "./src/router/order";
import reviewRouter from "./src/router/review";
import categoryRouter from "./src/router/category";

dotenv.config();
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

//using the routes
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.use("/review", reviewRouter);
app.use("/category", categoryRouter);

// dotenv configuration.
let {
  DBUSER,
  DBPASS,
  CLOUDINARYSECRET,
  CLOUDINARYKEY,
  CLOUDINARYUSER,
  EMAILUSER,
  EMAILPASS,
  EMAILTOKEN,
} = process.env;
cloudinary.config({
  cloud_name: CLOUDINARYUSER,
  api_key: CLOUDINARYKEY,
  api_secret: CLOUDINARYSECRET,
});
var transport = nodemailer.createTransport({
  service: "Mail.ru",
  auth: {
    user: EMAILUSER,
    pass: EMAILTOKEN,
    auth: EMAILPASS,
  },
});
const MONGO_CONNECTION_STRING = `mongodb+srv://${DBUSER}:${DBPASS}@foodapp.pk3ugl6.mongodb.net/`;

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });
// mongodb connection

cloudinary.api.resources(function (error, result) {
  if (error) {
    console.error("Error retrieving Cloudinary resources:", error);
  } else {
    const imageUrls = result.resources.map((resource) => resource.secure_url);
  }
});
//cloudinary connection

// Initialize the app
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app listening
app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
