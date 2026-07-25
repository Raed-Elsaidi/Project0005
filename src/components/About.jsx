import {
  FaUserGraduate,
  FaLaptopCode,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const stats = [
    {
      number: "10+",
      title: "Projects",
    },
    {
      number: "10+",
      title: "Technologies",
    },
    {
      number: "10+",
      title: "Training Courses",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}

        <div className="text-center mb-16">

          

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mt-2">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}

          <div className="space-y-6">

            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              Full Stack Developer
            </h3>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
             I'm Raed Elsaidi, a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I love turning ideas into real products using the latest web technologies. I hold a Bachelor's degree in Computer Information Systems and have successfully completed numerous training courses that strengthened my expertise in web development, programming, and modern technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <FaLaptopCode className="text-3xl text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Profession
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <FaMapMarkerAlt className="text-3xl text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Gaza, Palestine
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <FaUserGraduate className="text-3xl text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Education
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bachelor's degree in Computer Information Systems
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <FaCode className="text-3xl text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Focus
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    React • Tailwind CSS • SQL
                  </p>
                </div>
              </div>

            </div>

          </div>
          {/* Right Side */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-blue-500/20 transition-all duration-300"
              >
                <h3 className="text-5xl font-extrabold text-blue-500">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 font-medium">
                  {item.title}
                </p>
              </div>
            ))}

            <div className="sm:col-span-3 mt-8 p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-4">
                {[
                  "HTML 5",
                  "CSS 3",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "SQL",
                  "Git",
                  "PYTHON",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium hover:scale-105 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
        </div>
    </section>
  );
}

export default About;