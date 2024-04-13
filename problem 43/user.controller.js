// Please don't change the pre-written code
// Import the necessary modules here

// import { updateUsers, users } from "./user.model.js";
import UserModel from "./user.model.js";


class UsersController {

  renderUpdateForm(req, res) {
    UserModel.updateUsers(req.body);
    var users = UserModel.getAll();
    res.render("update-form", { user: users[0] });
  };
  
  getUpdateUserView(req, res, next) {
    const id = req.body.id;
    const userFound = UserModel.getById(id);
    if (userFound) {
      res.render('update-user', {
        user: userFound,
        errorMessage: null,
      });
    }
    else {
      res.status(401).send('User not found');
    }
  }

  postUpdateUser(req, res) {
    UserModel.updateUsers(req.body);
    var users = UserModel.getAll();
    res.render('update-form', { user: users[0]});
  }
}

export default UsersController;
