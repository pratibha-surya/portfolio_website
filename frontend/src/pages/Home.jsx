function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white px-6 sm:px-12">
      <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg text-center">
        Hi, I'm Pratibha
      </h1>
      <p className="mt-6 text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-md text-center max-w-3xl">
        Full Stack MERN Developer
      </p>
      <p className="mt-6 max-w-2xl text-center text-white/90 text-lg sm:text-xl leading-relaxed">
        Building modern, responsive, and user-friendly web applications with
        MongoDB, Express, React, and Node.js.
      </p>
      <a
        href="#contact"
        className="mt-10 inline-block bg-white text-teal-600 font-semibold rounded-lg px-8 py-3 shadow-lg hover:bg-teal-100 transition"
      >
        Contact Me
      </a>
    </div>
  );
}

export default Home;
