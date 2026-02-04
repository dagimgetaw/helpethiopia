import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Blog description is required"],
      trim: true,
    },
    contentHtml: {
      type: String,
    },
    file: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const BlogModel = mongoose.model("Blog", BlogSchema);

export default BlogModel;
