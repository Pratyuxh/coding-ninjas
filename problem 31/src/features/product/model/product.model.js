// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from "../../user/model/user.model.js";

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productID, userID, rating) => {
  // Write your code here
  const user = UserSchema.getAll().find(
    (u)=> u.id==userID
  );
  if (!user) {
    throw new ApplicationError('User Not Found', 404);
  }

  const product = products.find(
    (p)=> p.id==productID
  );
  if (!product) {
    throw new ApplicationError('Product Not Found', 400);
  }

  if(!product.ratings){
    product.ratings = [];
    product.ratings.push({
      userID:userID,
      rating:rating
    });
  } else {
    const existingRatingIndex = product.ratings.findIndex(
      (r) => r.userID == userID
    );
    if(existingRatingIndex>=0){
      product.ratings[existingRatingIndex] = {
        userID:userID,
        rating:rating
      };
    }else{
      product.ratings.push({
        userID:userID,
        rating:rating
      });
    }
  }
};