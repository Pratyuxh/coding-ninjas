// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
// import { renderUpdateForm } from "./user.controller.js";
import UsersController from './user.controller.js';

const app = express();
const userController = new UsersController();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", userController.renderUpdateForm);
app.get('/:id', userController.getUpdateUserView);
app.post('/', userController.postUpdateUser);
// create POST route at ("/") to handle the form submission

export default app;
