import { useEffect, useRef, useContext } from "react";
import Typed from "typed.js";
import { DarkModeContext } from "../context/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Building backend systems that scale. Available for opportunities.",
      ],
      startDelay: 100,
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 10,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <footer 
      className={`py-6 border-t flex flex-col items-center text-center px-5 transition-colors ${
        isDarkMode ? "bg-slate-900 text-white border-slate-800" : "bg-gray-100 text-gray-900 border-gray-200"
      }`}
      role="contentinfo"
    >

      {/* ⭐ NEW HEADING */}
      <h2 className={`text-2xl md:text-2xl font-bold mt-8 mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Connect
      </h2>

      <p className={`text-sm max-w-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        Interested in backend engineering opportunities or have a project in mind? I'm open to discussions and collaboration.
      </p>

      {/* ⭐ Contact Info Box (Dark Theme) */}
      <div
        className={`
          mt-4
          rounded-xl
          shadow-lg
          p-6
          w-full
          max-w-3xl
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          text-sm
          transition-colors
          ${isDarkMode 
            ? "bg-slate-800 hover:bg-slate-700 text-white" 
            : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
          }
        `}
        role="region"
        aria-label="Contact information"
      >
        {/* EMAIL */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">Email</span>
          <a
            href="mailto:bhabesh.barik.dev@gmail.com"
            className={`hover:underline break-all mt-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-1 ${
              isDarkMode ? "text-gray-300" : "text-blue-500"
            }`}
            aria-label="Send me an email at bhabesh.barik.dev@gmail.com"
          >
            bhabesh.barik.dev@gmail.com
          </a>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">Mobile</span>
          <span className={`mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`} aria-label="Phone number: +91 8249878929">+91 8249878929</span>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">Location</span>
          <span className={`mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`} aria-label="Located in Bhubaneswar, India">Bhubaneswar, India</span>
        </div>
      </div>

      {/* Typed text section */}
      <div className={`mt-4 text-sm italic max-w-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"}`} role="status" aria-live="polite">
        <b>
          <span ref={el}></span>
        </b>
      </div>

      {/* Footer Credits */}
      <p className={`text-xs mt-3 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
        © 2025 Bhabesh Ranjan Barik | Built with React and Tailwind CSS
      </p>

    </footer>
  );
};

export default Footer;
