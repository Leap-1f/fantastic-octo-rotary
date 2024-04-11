import { Router } from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  getProducts,
} from "../controller/category.js";

const categoryRouter = Router();
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/create", createCategory);
categoryRouter.post("/delete", deleteCategory);
categoryRouter.post("/products", getProducts);
export default categoryRouter;
