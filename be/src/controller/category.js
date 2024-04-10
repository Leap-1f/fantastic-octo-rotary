import { Category } from "../../model/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await new Category.create({
      categoryName: name,
    });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Category.findById(req.params.id).populate(
      "products"
    );
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
