// Please don't change the pre-written code
// Import the necessary modules here

export default class ProductController {
  getProducts = (req, res) => {
    const products = ProductModel.fetchProducts();
    res.status(200).send(products);
  };
}
