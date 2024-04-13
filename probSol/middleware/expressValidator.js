// Please don't change the pre-written code
// Import the necessary modules here
import { validationResult, body } from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  const rules = [
    body('name')
    .notEmpty()
    .withMessage("Name is required"),
    body('email')
    .isEmail()
    .withMessage("Enter a valid email"),
    body('image')
    .custom((value, {req})=>{
      if(!req.file){
        throw new Error("Profile image is required");
      }
      return true;
    })
  ]

  await Promise.all(rules.map(rule=> rule.run(req)));

  let validationError = validationResult(req);
  if(!validationError.isEmpty()){
      return res.send(validationError);
  }
  next();

};