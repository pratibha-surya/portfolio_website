import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-xl max-w-3xl mt-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-8 border-b-4 border-teal-400 inline-block pb-3">
        <Typewriter
          words={['My Skills']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-6 py-4 text-center font-semibold text-gray-800 text-lg hover:text-teal-600 border-t-4 border-teal-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
