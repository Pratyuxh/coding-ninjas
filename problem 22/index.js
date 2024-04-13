// Please don't change the pre-written code
// Import the necessary modules here
import { renderBlogForm } from "./src/controllers/blog.controller.js";
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Create an instance of BlogController
app.get("/createblog", renderBlogForm);

export default app;
