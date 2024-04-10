import { Review } from "../../model/review.model.js";
import { Product } from "../../model/product.model.js";
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getReviewsByProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const reviews = await Review.find({ product: id });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getReview = async (req, res) => {
  const { id } = req.body;
  try {
    const review = await Review.findById(id);
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const createReview = async (req, res) => {
  const { product, user, stars, comment } = req.body;
  try {
    const review = new Review({
      product,
      user,
      stars,
      comment,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const updateProductStars = async (req, res) => {
  const { id } = req.body;
  const reviewStarTotal = await Review.find({ product: id });
  const totalReviewNumber = reviewStarTotal.length;
  const totalStars = reviewStarTotal.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  try {
    const product = await Product.findByIdAndUpdate(id, {
      $set: {
        stars: Math.round(totalStars / totalReviewNumber),
      },
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
