// Import the necessary modules here
import ProductModel from "../models/product.model.js";
import { products } from "../assets/products.js";

export default class ProductController {
  getProducts = (req, res) => {
    const products = ProductModel.fetchProducts();
    res.status(200).send(products);
  };
}
