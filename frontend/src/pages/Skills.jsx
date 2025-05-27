function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md max-w-xl mt-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-teal-400 inline-block pb-2">
        My Skills
      </h2>
      <ul className="grid grid-cols-2 gap-4 text-lg text-gray-700">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-default px-4 py-3 text-center font-semibold text-gray-800 hover:text-teal-500"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
