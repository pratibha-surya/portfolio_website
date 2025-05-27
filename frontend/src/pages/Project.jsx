import { useEffect, useState } from "react";
import axios from "axios";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from backend API when component mounts
    axios
      .get("http://localhost:5000/api/v1/project")
      .then((res) => {
        setProjects(res.data); // assuming API returns an array of projects
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      {/* Show message if no projects */}
      {projects.length === 0 ? (
        <p className="text-gray-500">No projects available at the moment.</p>
      ) : (
        // Grid container for project cards
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            // Individual project card
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <p className="text-sm italic text-gray-500 mb-4">
                Tech: {project.techStack.join(", ")}
              </p>

              {/* Links container */}
              <div className="space-x-4">
                {/* GitHub link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>

                {/* Live site link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Project;
