import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24 transition-colors duration-300 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-500"></div>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Feel free to contact me for collaboration or any opportunities.
          </p>

        </div>

        <div className="grid gap-12 md:grid-cols-2">

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500 p-4 text-white">
                <FaEnvelope size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold dark:text-white">
                  Email
                </h3>

                <a
                  href="mailto:elsaidiraed@gmail.com"
                  className="text-gray-600 transition hover:text-cyan-500 dark:text-gray-400"
                >
                  elsaidiraed@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500 p-4 text-white">
                <FaWhatsapp size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold dark:text-white">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/970599242087"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 transition hover:text-green-500 dark:text-gray-400"
                >
                  +970 599 242 087
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-500 p-4 text-white">
                <FaMapMarkerAlt size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold dark:text-white">
                  Location
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  Gaza, Palestine 🇵🇸
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/raed.elsaidi"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/raed-elsaidi-98b1033a6"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/raed-elsaidi"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-gray-800 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://wa.me/970599242087"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
              >
                <FaWhatsapp size={24} />
              </a>

            </div>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 transition-all duration-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 transition-all duration-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 bg-white p-4 transition-all duration-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-cyan-500 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;