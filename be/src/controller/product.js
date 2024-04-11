import { Product } from "../../model/product.model.js";
// this gets a specific product by id.
// used when you click on a product icon in the frontend. works like http://localhost:8080/product/getProduct?id=idhere and just use map to href that. No double quoteation.
export const getProduct = async (req, res) => {
  const { id } = req.query;
  try {
    const product = await Product.findById(id);
    const viewIncrease = await Product.findByIdAndUpdate(id, {
      $inc: { viewCount: 1 },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// this gets all products.
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    } else {
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
// If you need to get products by category then refer to the category controller.

// this updates a product with the body data.
export const updateProduct = async (req, res) => {
  const {
    id,
    productName,
    description,
    price,
    image,
    discountPrecent,
    category,
    topCategory,
  } = req.body;
  try {
    const product = await Product.findOneAndUpdate(
      { _id: id },
      {
        productName: productName,
        description: description,
        price: price,
        image: image,
        discountPrecent: discountPrecent,
        category: category,
        topCategory: topCategory,
      }
    );
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
// this creates a new product. Probably should make the image require and the thumbnail as optional. But for now it is not.
export const createProduct = async (req, res) => {
  const {
    productName,
    description,
    price,
    image,
    discountPrecent,
    category,
    topCategory,
    quantityRemaining,
  } = req.body;
  try {
    const product = await Product.create({
      productName: productName,
      description: description,
      price: price,
      image: image,
      discountPrecent: discountPrecent,
      category: category,
      topCategory: topCategory,
      quantityRemaining: quantityRemaining,
    });
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
