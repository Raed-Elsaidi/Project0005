import { motion } from "framer-motion";
import profile from "../../assets/profile2.jpg";
import FloatingBadges from "./FloatingBadges";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center w-[430px] h-[430px] -translate-y-24 -translate-x-10"
    >
      <FloatingBadges />

      {/* Outer Blue Border */}
      <div
        className="absolute w-[382px] h-[382px] rounded-full border border-cyan-400"
        style={{
          boxShadow:
            "0 0 10px rgba(56,189,248,.9), 0 0 22px rgba(56,189,248,.55), 0 0 40px rgba(56,189,248,.25)",
        }}
      />

      {/* Rotating Gradient Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[378px] h-[378px] rounded-full p-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899,#06b6d4)",
        }}
      >
        <div className="w-full h-full rounded-full bg-[#050816]" />
      </motion.div>

      {/* Profile Image */}
      <img
        src={profile}
        alt="Raed Elsaidi"
        className="relative z-20 w-[374px] h-[374px] rounded-full object-cover"
      />
    </motion.div>
  );
};

export default HeroCard;