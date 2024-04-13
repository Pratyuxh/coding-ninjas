// export const validateBlog = (req, res) => {
//   const { title, description, image } = req.body;
//     let errors = [];
//     // console.log("Data Recieved", req.body);
//     if (!title || title.trim() == '') {
//       errors.push('Title cannot be empty');
//     }
//     if (!title || title.length < 3) {
//       errors.push(
//         'Title should have a minimum length of three characters'
//       );
//     }

//     if (!description || description.trim() == '') {
//       errors.push('Description cannot be empty');
//     }
//     if (!description || description.length < 10) {
//       errors.push(
//         'Description should have a minimum length of ten characters'
//       );
//     }

//     try {
//       const validUrl = new URL(image);
//     } catch (err) {
//       errors.push('Please enter a valid image URL');
//     }

//     if (errors.length > 0) {
//       return res.status(401).render("addBlog", { errors: errors, success: false });
//     }

//   res.status(201).render("addBlog", { errors: null, success: true });
// };

// export const renderBlogForm = (req, res) => {
//   res.render("addBlog", { errors: null, success: false });
// };

export const validateBlog = (req, res) => {
  const { title, description, image } = req.body;
  title.trim();
  description.trim();
  image.trim();
  const errors = [];
  try {
    new URL(image);
  } catch (err) {
    errors.push("The image URL provided should be a valid URL");
  }
  if (!title) {
    errors.push("The title field should not be empty");
  }
  if (title.length < 3) {
    errors.push("The title field should contain at least 3 characters");
  }
  if (!description) {
    errors.push("The description field should not be empty");
  }
  if (description.length < 10) {
    errors.push("The description field should contain at least 10 characters");
  }
  if (errors.length > 0) {
    res.status(401).render("addBlog", { errors, success: false });
  }
  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};