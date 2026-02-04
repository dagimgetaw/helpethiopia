import { Router } from "express";
import { GetBlog, GetBlogById } from "../controller/blog.controller.js";

const BlogRoute = Router();

BlogRoute.get("/get-blog", GetBlog);
BlogRoute.get("/get-blog/:id", GetBlogById);

export default BlogRoute;
