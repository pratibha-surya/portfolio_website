import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/v1/project");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      techStack: formData.techStack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      if (editId) {
        await axios.put(
          `/api/v1/project/${editId}`,
          payload
        );
        setEditId(null);
      } else {
        await axios.post("/api/v1/project/create", payload);
      }

      setFormData({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
      });

      fetchProjects();
      setShowForm(false); // Close form after submit
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  // Handle editing
  const handleEdit = (project) => {
    setEditId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      techStack: Array.isArray(project.techStack)
        ? project.techStack.join(", ")
        : "",
      githubLink: project.githubLink,
      liveLink: project.liveLink,
    });
    setShowForm(true); // Show form when editing
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/project/${id}`);
      fetchProjects();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Toggle form for adding new project
  const toggleForm = () => {
    if (editId) {
      // Cancel editing
      setEditId(null);
    } else {
      setShowForm((prev) => !prev);
      setFormData({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Portfolio Projects
      </h2>

      <div className="text-center mb-6">
        <button
          onClick={toggleForm}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editId ? "Cancel Edit" : showForm ? "Close Form" : "Add New Project"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-10 border"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            {editId ? "Edit Project" : "Create Project"}
          </h3>

          {["title", "description", "techStack", "githubLink", "liveLink"].map(
            (field) => (
              <div key={field}>
                <label className="block text-gray-700 font-medium mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  name={field}
                  placeholder={`Enter ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            )
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {editId ? "Update Project" : "Create Project"}
          </button>
        </form>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        All Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-md border rounded-lg p-5 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Tech:</strong>{" "}
              {Array.isArray(project.techStack)
                ? project.techStack.join(", ")
                : ""}
            </p>
            <div className="text-sm text-blue-600 mb-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Live
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleEdit(project)}
                className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateProjectForm;
