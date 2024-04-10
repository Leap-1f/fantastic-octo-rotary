import { Router } from "express";
import {
  getProduct,
  getProducts,
  updateProduct,
  createProduct,
} from "../controller/product.js";

const productRouter = Router();
productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/create", createProduct);
productRouter.post("/update", updateProduct);
export default productRouter;
