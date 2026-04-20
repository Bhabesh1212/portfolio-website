import { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { trackLinkClick, trackEvent, trackResumeDownload, trackSectionView } from "../utils/googleAnalytics";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const pdfFile = `${import.meta.env.BASE_URL}bhabesh_ranjan_barik.pdf`;
  const homeLink = import.meta.env.BASE_URL;

  const brandName = "Bhabesh Ranjan Barik";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation sections for smooth scrolling
  const sections = [
    { title: "Home", id: "home", offset: 0 },
    { title: "About", id: "about-section", offset: -80 },
    { title: "Experience", id: "experience-section", offset: -80 },
    { title: "Projects", id: "projects-section", offset: -80 },
    { title: "Services", id: "services-section", offset: -80 },
    { title: "Skills", id: "skills-section", offset: -80 },
    { title: "Contact", id: "contact-section", offset: -80 },
  ];

  const handleSmoothScroll = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop + offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const menuLinks = [
    {
      title: "Home",
      action: () => handleSmoothScroll("home", 0),
      id: 1,
    },
    {
      title: "About",
      action: () => handleSmoothScroll("about-section", -80),
      id: 2,
    },
    {
      title: "Experience",
      action: () => handleSmoothScroll("experience-section", -80),
      id: 3,
    },
    {
      title: "Projects",
      action: () => handleSmoothScroll("projects-section", -80),
      id: 4,
    },
    {
      title: "Contact",
      action: () => handleSmoothScroll("contact-section", -80),
      id: 5,
    },
  ];

  return (
    <header 
      className={`h-20 flex items-center px-6 md:px-16 shadow-lg fixed top-0 left-0 w-full z-50 transition-colors ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      role="banner"
    >
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Brand */}
      <h1 className="text-lg md:text-xl font-bold">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`hover:text-orange-600 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-2 py-1 cursor-pointer bg-transparent border-none text-left`}
          aria-label={brandName}
        >
          {brandName}
        </button>
      </h1>

      {/* Desktop Menu */}
      <nav 
        className="hidden md:flex ml-auto space-x-2 items-center"
        aria-label="Main navigation"
      >
        {menuLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              item.action();
              trackSectionView(item.title);
            }}
            className={`hover:text-orange-600 cursor-pointer text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-3 py-2 transition bg-transparent border-none`}
            aria-label={item.title}
          >
            {item.title}
          </button>
        ))}

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            toggleDarkMode();
            trackEvent('dark_mode_toggle', { new_mode: !isDarkMode });
          }}
          className={`ml-4 p-2 rounded-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
            isDarkMode
              ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackResumeDownload()}
          className="px-4 py-2 bg-orange-500 text-black rounded-full shadow-md hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
          aria-label="Download Resume - Opens in new tab"
        >
          Download Resume
        </a>
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        className={`md:hidden ml-auto text-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded p-1 transition bg-transparent border-none`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onKeyDown={handleKeyDown}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className={`absolute top-20 left-0 w-full shadow-md py-4 flex flex-col space-y-4 md:hidden px-6 transition-colors ${
            isDarkMode ? "bg-slate-900 text-white border-t border-slate-800" : "bg-gray-100 text-gray-900 border-t border-gray-200"
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {menuLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.action();
                trackSectionView(item.title);
              }}
              className={`hover:text-orange-600 cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-2 py-1 transition text-left bg-transparent border-none`}
              aria-label={item.title}
            >
              {item.title}
            </button>
          ))}

          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={() => {
              toggleDarkMode();
              trackEvent('dark_mode_toggle', { new_mode: !isDarkMode });
            }}
            className={`p-2 rounded-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-left ${
              isDarkMode
                ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackResumeDownload()}
            className="px-4 py-2 bg-orange-500 text-black rounded-full shadow-md text-center hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
            aria-label="Download Resume - Opens in new tab"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
