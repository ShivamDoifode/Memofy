import mongoose from "mongoose";

// 1. Define/Create schema
// 2. Create Model based of that Schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const Note = mongoose.model("Note", noteSchema);

export default Note;
