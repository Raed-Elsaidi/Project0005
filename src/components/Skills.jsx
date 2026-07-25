import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPython,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      level: 95,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
      level: 90,
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-400",
      level: 90,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
      level: 95,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-500",
      level: 85,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-800 dark:text-white",
      level: 85,
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      color: "text-green-600",
      level: 85,
    },
    {
      name: "Python",
      icon: <SiPython />,
      color: "text-yellow-500",
      level: 80,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-red-500",
      level: 90,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-5"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={"text-5xl " + skill.color}>
                  {skill.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-700"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;