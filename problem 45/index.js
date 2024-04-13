// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { addBlog , renderBlogForm, renderBlogs } from "./src/controllers/blog.controller.js"
// import { urlencoded } from "express";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.use(urlencoded({extended:true}));
app.get("/createblog", renderBlogForm);

// create POST route at ("/") to handle the form submission
app.get("/", renderBlogs);
app.post("/addblog", addBlog);

// Write your code here

export default app;
