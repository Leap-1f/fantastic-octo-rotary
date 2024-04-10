import { Router } from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
} from "../controller/category.js";

const categoryRouter = Router();
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", createCategory);
categoryRouter.delete("/:id", deleteCategory);
export default categoryRouter;
