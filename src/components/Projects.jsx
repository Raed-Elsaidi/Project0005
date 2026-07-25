import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import library from "../assets/1.png";
import perfume from "../assets/2.png";
import travel from "../assets/3.png";
import store from "../assets/4.png";
import portfolio from "../assets/5.png";
import ComingSoon from "../assets/6.png";

function Projects() {
  const projects = [
    {
      title: "📚 Library Website",
      description:
        "A modern online library website for browsing books and managing collections.",
      image: library,
      technologies: ["HTML", "CSS"],
      link: "https://raed-elsaidi.github.io/Project0001/",
    },
    {
      title: "🌸 Perfume Store",
      description:
        "A responsive perfume store with product categories and elegant design.",
      image: perfume,
      technologies: ["HTML5", "CSS3"],
      link: "https://raed-elsaidi.github.io/Project0002/",
    },
    {
      title: "✈️ Travel & Tourism",
      description:
        "A travel and tourism website showcasing destinations and booking services.",
      image: travel,
      technologies: ["HTML5", "CSS3", "Tailwind CSS"],
      link: "https://raed-elsaidi.github.io/project0003/",
    },
    {
      title: "🛒 Online Store",
      description:
        "A modern online shopping website with products and shopping cart.",
      image: store,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "https://raed-elsaidi.github.io/Project0004/",
    },
    {
      title: "👨‍💻 Raed Portfolio",
      description:
        "My personal portfolio showcasing my skills and projects.",
      image: portfolio,
      technologies: ["HTML5", "CSS3", "React", "Tailwind CSS"],
      link: "https://raed-elsaidi.github.io/Project0005/",
    },
    {
      title: "🚀 Coming Soon",
      description:
        "A new project is currently under development and will be available soon.",
      image: ComingSoon,
      technologies: ["Coming Soon"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-500"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] dark:border-gray-700 dark:bg-gray-800"
            >

              <div className="border-b border-gray-200 bg-gray-100 p-3 dark:border-gray-700 dark:bg-gray-900">

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-2xl transition-all duration-500 group-hover:scale-110"
                  />

                </div>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-cyan-400 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                 {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="cursor-default rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700 transition-all duration-300 hover:bg-cyan-500 hover:text-white dark:bg-cyan-900/30 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">

                  {project.title !== "🚀 Coming Soon" ? (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]"
                    >
                      <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-1" />
                      View Project
                    </a>

                  ) : (

                    <button
                      disabled
                      className="w-full cursor-not-allowed rounded-xl bg-gray-400 px-5 py-3 font-medium text-white dark:bg-gray-700"
                    >
                      🚀 Coming Soon
                    </button>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;