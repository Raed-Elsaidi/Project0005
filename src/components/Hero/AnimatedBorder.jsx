import { motion } from "framer-motion";

const AnimatedBorder = ({ children }) => {
  return (
    <div className="relative inline-block rounded-[34px] p-[3px] overflow-hidden">

      {/* Animated Gradient */}
      <motion.div
        className="absolute inset-0 rounded-[34px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "conic-gradient(from 0deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#06b6d4)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[34px] blur-2xl opacity-40"
        style={{
          background:
            "linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899)",
        }}
      />

      {/* Image */}
      <div className="relative rounded-[31px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;