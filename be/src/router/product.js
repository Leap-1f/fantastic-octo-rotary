import { Router } from "express";
import {
  getProduct,
  getProducts,
  updateProduct,
  createProduct,
} from "../controller/product.js";
import { verifyToken } from "../middleware/authMiddleware.js";
productRouter.use(verifyToken);
const productRouter = Router();
productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/create", verifyToken, createProduct);
productRouter.post("/update", verifyToken, updateProduct);
export default productRouter;
