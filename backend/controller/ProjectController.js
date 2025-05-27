import Project from "../model/Project.js";


 export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


 export const createProject = async (req, res) => {
  const { title, description, techStack, githubLink, liveLink } = req.body;

  try {
    // Validate required fields (optional but recommended)
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    // Create new Project instance
    const newProject = new Project({
      title,
      description,
      techStack,
      githubLink,
      liveLink,
    });

    // Save to DB
    const savedProject = await newProject.save();

    // Return the saved project with 201 Created status
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Failed to create project", error: error.message });
  }
};


 export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


 export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


 export const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


