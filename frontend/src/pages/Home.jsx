import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 2500); // after title
    const paragraphTimer = setTimeout(() => setShowParagraph(true), 4000); // after subtitle
    const buttonTimer = setTimeout(() => setShowButton(true), 5500); // after paragraph

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(paragraphTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white px-6 sm:px-12">
      <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg text-center">
        <Typewriter
          words={["Hi, I'm Pratibha"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {showSubtitle && (
        <p className="mt-6 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-md text-center max-w-3xl transition-opacity duration-700 ease-in">
          Full Stack MERN Developer
        </p>
      )}

      {showParagraph && (
        <p className="mt-6 max-w-2xl text-center text-white/90 text-lg sm:text-xl leading-relaxed transition-opacity duration-700 ease-in">
          Building modern, responsive, and user-friendly web applications with
          MongoDB, Express, React, and Node.js.
        </p>
      )}

      {showButton && (
        <a
          href="#contact"
          className="mt-10 inline-block bg-white text-teal-600 font-semibold rounded-lg px-8 py-3 shadow-lg hover:bg-teal-100 transition"
        >
          Contact Me
        </a>
      )}
    </div>
  );
}

export default Home;
