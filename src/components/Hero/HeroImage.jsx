import { motion } from "framer-motion";
import profile from "../../assets/profile2.jpg";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative flex items-center justify-center"
    >
      <div className="group relative flex h-[520px] w-[520px] items-center justify-center">
        {/* Glow */}
        <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-[90px] dark:bg-cyan-500/20" />

        {/* Gradient Border */}
        <div className="absolute h-[355px] w-[355px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[3px] shadow-[0_0_60px_rgba(34,211,238,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_90px_rgba(34,211,238,0.55)]">
          <div className="relative h-full w-full rounded-full bg-white dark:bg-slate-900" />
        </div>

        {/* Image */}
        <div className="relative z-20 h-[340px] w-[340px] overflow-hidden rounded-full border-4 border-white/80 dark:border-slate-700 shadow-2xl">
          <img
            src={profile}
            alt="Raed Elsaidi"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/15 via-transparent to-transparent" />

          {/* Shine */}
          <div className="absolute -left-32 top-0 h-full w-20 -skew-x-12 bg-white/30 blur-md transition-all duration-1000 group-hover:left-[420px]" />
        </div>

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-16 right-8 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl dark:bg-slate-800/30"
        >
          <p className="text-sm font-semibold text-cyan-400">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-8 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl dark:bg-slate-800/30"
        >
          <p className="text-sm font-semibold text-blue-400">
            React • Node.js