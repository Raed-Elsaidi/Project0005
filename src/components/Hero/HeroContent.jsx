import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full borde px-5 py-2 text-cyan-500">
        <span className="text-xl">👋</span>
        <span className="font-medium">
          Welcome to My Portfolio
        </span>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-7xl">
          Hi, I'm
        </h1>

        <h1 className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent lg:text-7xl">
          Raed Elsaidi
        </h1>

        <div className="mt-4 h-12">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "React Developer",
              2000,
              "Problem Solver",
              2000,
              "Computer Teacher",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl font-bold text-cyan-500 lg:text-3xl"
          />
        </div>
      </div>

      {/* Description */}
      <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        Passionate Full Stack Developer focused on building modern,
        responsive, scalable, and high-performance web applications with
        exceptional user experiences.
      </p>

      {/* Buttons */}
    <div className="flex flex-wrap gap-3 sm:gap-4">

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#projects"
    className="flex w-[150px] sm:w-[200px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg transition"
  >
    View Projects
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://raed-elsaidi.github.io/Project0005/cv/Raed-Elsaidi-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex w-[150px] sm:w-[200px] items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold"
  >
    <FaDownload />
    Download CV
  </motion.a>

</div>
      {/* Social */}
      <div className="flex items-center gap-5">
        <motion.a
          whileHover={{ y: -6, scale: 1.12 }}
          href="https://raed-elsaidi.github.io/Project0005/cv/Raed-Elsaidi-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-100 p-4 text-xl text-slate-700 shadow-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] dark:bg-slate-800 dark:text-white"
        >
          <FaFacebookF />
        </motion.a>

        <motion.a
          whileHover={{ y: -6, scale: 1.12 }}
          href="https://www.linkedin.com/in/raed-elsaidi-98b1033a6"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-100 p-4 text-xl text-slate-700 shadow-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] dark:bg-slate-800 dark:text-white"
        >
          <FaLinkedinIn />
        </motion.a>

        <motion.a
        whileHover={{ y: -6, scale: 1.12 }}
          href="mailto:elsaidiraed@gmail.com"
          className="rounded-full bg-slate-100 p-4 text-xl text-slate-700 shadow-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] dark:bg-slate-800 dark:text-white"
        >
          <FaEnvelope />
        </motion.a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 pt-6">
        <motion.div
          whileHover={{ y: -8, scale: 1.05 }}
          className="rounded-2xl border border-slate-300 dark:border-slate-700 p-5 text-center transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
        >
          <h3 className="text-3xl font-bold text-cyan-500">10+</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Projects
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.05 }}
          className="rounded-2xl border border-slate-300 dark:border-slate-700 p-5 text-center transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
        >
          <h3 className="text-3xl font-bold text-cyan-500">10+</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Training Courses
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.05 }}
          className="rounded-2xl border border-slate-300 dark:border-slate-700 p-5 text-center transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
        >
          <h3 className="text-3xl font-bold text-cyan-500">100%</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Passion
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;