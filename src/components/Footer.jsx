import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

function Footer({ active, setActive }) {
  const footerLink = (href, text, key) => {
    const isActive = active === key;

    return (
      <a
        href={href}
        onClick={() => setActive(key)}
        className={
          "group relative px-2 py-2 font-medium transition-all duration-300 " +
          (isActive
            ? "text-cyan-400"
            : "text-gray-400 hover:text-violet-400 hover:-translate-y-0.5")
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
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Raed Elsaidi
            </h2>

            <p className="mt-2 text-gray-400">
              Full Stack Developer | React Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-7">
            {footerLink("#", "Home", "home")}
            {footerLink("#about", "About", "about")}
            {footerLink("#skills", "Skills", "skills")}
            {footerLink("#projects", "Projects", "projects")}
            {footerLink("#contact", "Contact", "contact")}
          </div>

          <div className="flex flex-col items-center gap-4">

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/raed.elsaidi"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-3 text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/raed-elsaidi-98b1033a6"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-3 text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/raed-elsaidi"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-3 text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/970599242087"
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-3 text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                <FaWhatsapp />
              </a>

            </div>

            <a
              href="https://wa.me/970599242087"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-green-400"
            >
              <FaWhatsapp className="text-lg" />
              <span>+970 599 242 087</span>
            </a>

          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © 2026 Raed Elsaidi. Made with
            <FaHeart className="animate-pulse text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
           className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-cyan-500 bg-gray-800 text-cyan-400 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;