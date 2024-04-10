import { Router } from "express";
import {
  getReviews,
  getReviewsByProduct,
  getReview,
  createReview,
  deleteReview,
} from "../controller/review.js";

const reviewRouter = Router();
reviewRouter.get("/getReviews", getReviews);
reviewRouter.post("/getReview", getReview);
reviewRouter.post("/createReview", createReview);
reviewRouter.delete("/deleteReview", deleteReview);
reviewRouter.get("/product/", getReviewsByProduct);
export default reviewRouter;
