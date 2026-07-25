import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const badges = [
  {
    icon: <FaReact className="text-sky-400 text-5xl" />,
    top: "-20px",
    left: "50%",
    x: -185,
  },
  {
    icon: <RiTailwindCssFill className="text-cyan-400 text-5xl" />,
    top: "55px",
    right: "-25px",
  },
  {
    icon: <FaJs className="text-yellow-400 text-5xl" />,
    top: "50%",
    left: "-45px",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
    top: "50%",
    right: "-45px",
  },
  {
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    bottom: "-20px",
    left: "35px",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    bottom: "-20px",
    right: "35px",
  },
];

const FloatingBadges = () => {
  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="absolute z-30"
          style={{
            top: badge.top,
            bottom: badge.bottom,
            left: badge.left,
            right: badge.right,
            marginLeft: badge.x,
            filter: "drop-shadow(0 0 10px rgba(59,130,246,.6))",
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.25,
          }}
        >
          {badge.icon}
        </motion.div>
      ))}
    </>
  );
};

export default FloatingBadges;