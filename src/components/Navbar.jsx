import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

function Navbar({ darkMode, setDarkMode, active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const DarkToggle = (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={
        "relative w-16 h-8 rounded-full overflow-hidden transition-all duration-500 hover:rotate-180 hover:scale-110 " +
        (darkMode ? "bg-slate-700" : "bg-yellow-400")
      }
    >
      {darkMode && (
        <>
          <span className="absolute top-1 right-3 text-[8px] text-white animate-pulse">✦</span>
          <span
            className="absolute bottom-1 right-6 text-[6px] text-white animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            ✦
          </span>
          <span
            className="absolute top-3 left-5 text-[5px] text-white animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            ✦
          </span>
        </>
      )}

      <div
        className={
          "absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 " +
          (darkMode ? "left-1" : "left-9")
        }
      >
        {darkMode ? (
          <FaMoon className="text-slate-700 text-sm" />
        ) : (
          <FaSun className="text-yellow-500 text-sm" />
        )}
      </div>
    </button>
  );

  const navLink = (href, text, key) => {
    const isActive = active === key;

    return (
      <a
        href={href}
        onClick={() => {
          setActive(key);
          setMenuOpen(false);
        }}
        className={
          "group relative px-2 py-2 font-medium transition-all duration-300 " +
          (isActive
            ? "text-cyan-400"
            : "text-gray-700 dark:text-gray-300 hover:text-violet-400 hover:-translate-y-0.5")
        }
      >
        {text}

        <span
          className={
            "absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 " +
            (isActive
              ? "w-full bg-cyan-400"
              : "w-0 bg-violet-400 group-hover:w-full")
          }
        ></span>
      </a>
    );
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        <a href="#" onClick={() => setActive("home")}>
          <img
            src={logo}
            alt="Raed Logo"
            className="h-14 rounded-xl border border-gray-300 shadow-md dark:border-gray-700"
          />
        </a>

        <div className="hidden items-center gap-7 font-medium md:flex">
          {navLink("#", "Home", "home")}
          {navLink("#about", "About", "about")}
          {navLink("#skills", "Skills", "skills")}
          {navLink("#projects", "Projects", "projects")}
          {navLink("#contact", "Contact", "contact")}

          {DarkToggle}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {DarkToggle}

          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-gray-800 dark:text-white"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          "fixed top-0 right-0 z-50 h-screen w-72 border-l border-gray-200 bg-white shadow-2xl transition-transform duration-500 dark:border-gray-800 dark:bg-gray-950 md:hidden " +
          (menuOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-gray-800">
         <a
            href="#"
            onClick={() => {
              setActive("home");
              setMenuOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Raed Logo"
              className="h-12 rounded-lg"
            />
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700 transition hover:text-red-500 dark:text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-6">
          <div className="px-4 py-2">
            {navLink("#", "Home", "home")}
          </div>

          <div className="px-4 py-2">
            {navLink("#about", "About", "about")}
          </div>

          <div className="px-4 py-2">
            {navLink("#skills", "Skills", "skills")}
          </div>

          <div className="px-4 py-2">
            {navLink("#projects", "Projects", "projects")}
          </div>

          <div className="px-4 py-2">
            {navLink("#contact", "Contact", "contact")}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-5 dark:border-gray-800">
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              Theme
            </p>

            {DarkToggle}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;