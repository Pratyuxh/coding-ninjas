// Please don't change the pre-written code
// Import the necessary modules here

// import UserSchema from "../features/user/model/user.model.js";

// const basicAuthMiddleware = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//     if(!authHeader){
//         return res.status(401).send("No Authorization Details Found");
//     }
//     console.log(authHeader);
//     const base64Credentials = authHeader.replace('Basic','');
//     console.log(base64Credentials);
//     const decodedCreds = Buffer.from(base64Credentials, 'base64').toString('utf-8');
//     console.log(decodedCreds);
//     const creds = decodedCreds.split(':');

//     const user = UserSchema.getAllUsers().find(u=>u.email==creds[0] && u.password==creds[1]);
//     if(user){
//         next();
//     }
//     else {
//         return res.status(401).send("Incorrect Credentials");
//     }

// };
// // Please don't change the pre-written code
// // Import the necessary modules here

// import basicAuth from "express-basic-auth";

// const users = {
//   // Define your users and their passwords
//   "admin": "supersecret",
// };

// // Middleware to handle basic authentication
// const basicAuthMiddleware = basicAuth({
//   users,
//   challenge: true, // Optional, sends the WWW-Authenticate header
//   unauthorizedResponse: "Unauthorized", // Optional, custom response for unauthorized requests
// });

// export default basicAuthMiddleware;

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  const users = getAllUsers();
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res
      .status(401)
      .json({ success: "false", message: "no authorization details found" });
  }

  const base64Credentials = authHeader.replace("Basic ", "");
  const decodedCreds = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  const credentials = decodedCreds.split(":");
  const validUser = users.find((user) => {
    if (user.email === credentials[0] && user.password === credentials[1])
      return user;
  });
  if (validUser) next();
  else
    res.status(401).json({ success: "false", message: "authorization failed" });
};

export default basicAuthMiddleware;
