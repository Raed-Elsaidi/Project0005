import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Active Link
  const [active, setActive] = useState("home");

  return (
    <div className={darkMode ? "dark scroll-smooth" : "scroll-smooth"}>
      <div className="relative min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-all duration-500">

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

          <div
            className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-500/20 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"
            style={{
              transform: "translate(-50%, -50%)",
              animationDelay: "4s",
            }}
          ></div>

        </div>

        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          active={active}
          setActive={setActive}
        />

        {/* Main Content */}
        <main className="animate-fadeIn">

          <Hero />

          <About />

          <Skills />

          <Projects />

          <Contact />

        </main>

        {/* Footer */}
        <Footer
          active={active}
          setActive={setActive}
        />

      </div>
    </div>
  );
}

export default App;