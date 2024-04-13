// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    const products = ProductModel.fetchProducts();
    res.status(200).send(products);
  };
}
