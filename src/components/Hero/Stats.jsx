import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaAward,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    value: "10+",
    title: "Projects",
  },
  {
    icon: <FaLaptopCode />,
    value: "1+",
    title: "Years Learning",
  },
  {
    icon: <FaAward />,
    value: "100%",
    title: "Passion",
  },
  {
    icon: <FaRocket />,
    value: "24/7",
    title: "Available",
  },
];

const HeroStats = () => {
  return (
    <div className="relative z-20 mx-auto -mt-10 mb-16 max-w-6xl px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white/70
              p-7
              text-center
              shadow-xl
              backdrop-blur-xl
              transition-all
              duration-300

              dark:border-slate-700
              dark:bg-slate-900/60
            "
          >
            <div className="mb-5 flex justify-center text-4xl text-cyan-500">
              {item.icon}
            </div>

            <h3 className="text-3xl font-black">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;