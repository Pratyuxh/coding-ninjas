export const auth = (req, res, next) => {
  // Write your code here
  if (req.session.userEmail) {
    next();
  } else {
    return res.render("msgPage", {
      message: "login first to access secure page",
    });
  }
};



