import { useState } from "react";

const Header = () => {
  const pdfFile = `${import.meta.env.BASE_URL}bhabesh_ranjan_barik.pdf`;
  const homeLink = import.meta.env.BASE_URL;

  const brandName = "Bhabesh Ranjan Barik";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openEmailPopup = () => {
    const confirmed = window.confirm("Do you want to contact me via email?");
    if (confirmed) {
      window.location.href = "mailto:bhabesh.barik.dev@gmail.com";
    }
  };

  const menuLinks = [
    {
      title: "Home",
      link: homeLink,
      id: 1,
    },
    {
      title: "Contacts",
      link: "#",
      id: 4,
      action: openEmailPopup,
    },
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className="bg-gray-100 h-20 flex items-center px-6 md:px-16 shadow-lg fixed top-0 left-0 w-full z-50"
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
        <a 
          href={homeLink}
          aria-label={brandName}
          className="hover:text-orange-600 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-2 py-1"
        >
          {brandName}
        </a>
      </h1>

      {/* Desktop Menu */}
      <nav 
        className="hidden md:flex ml-auto space-x-8 items-center"
        aria-label="Main navigation"
      >
        {menuLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={(e) => {
              if (item.action) {
                e.preventDefault();
                item.action();
              }
            }}
            className="hover:text-orange-600 cursor-pointer text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-2 py-1 transition"
            aria-label={item.title}
          >
            {item.title}
          </a>
        ))}

        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-500 text-black rounded-full shadow-md hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
          aria-label="Download Resume - Opens in new tab"
        >
          Download Resume
        </a>
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden ml-auto text-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded p-1 transition"
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
          className="absolute top-20 left-0 w-full bg-gray-100 shadow-md py-4 flex flex-col space-y-4 md:hidden px-6"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {menuLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
                setIsMenuOpen(false);
              }}
              className="hover:text-orange-600 cursor-pointer text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-2 py-1 transition"
              aria-label={item.title}
            >
              {item.title}
            </a>
          ))}

          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
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
