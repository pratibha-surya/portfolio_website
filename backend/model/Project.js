
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  githubLink: String,
  liveLink: String
});

const Project =mongoose.model("Project",projectSchema)
export default Project