import { useState } from "react";

const Header = () => {
  const pdfFile = `${import.meta.env.BASE_URL}bhabesh_ranjan_barik.pdf`;

  const [brandName] = useState("Bhabesh Ranjan Barik");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openEmailPopup = () => {
    const confirmed = window.confirm("Do you want to contact me via email?");
    if (confirmed) {
      window.location.href = "mailto:bhabesh.barik.dev@gmail.com";
    }
  };

  const menuLinks = [
    // {
    //   title: "Home",
    //   link: "https://bhabesh1212.github.io/portfolio-website/",
    //   id: 1,
    // },
    // {
    //   title: "About",
    //   link: "/portfolio-website/about",
    //   id: 2,
    // },
    // {
    //   title: "Skill",
    //   link: "/portfolio-website/skill",
    //   id: 3,
    // },
    {
      title: "Contacts",
      link: "#",
      id: 4,
      action: openEmailPopup,
    },
  ];

  return (
    <header className="bg-gray-100 h-20 flex items-center px-6 md:px-16 shadow-lg fixed top-0 left-0 w-full z-50">
      {/* Brand */}
      <h1 className="text-lg md:text-xl font-bold">{brandName}</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex ml-auto space-x-8 items-center">
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
            className="hover:text-orange-600 cursor-pointer text-base"
          >
            {item.title}
          </a>
        ))}

        <a
          href={pdfFile}
          target="_blank"
          className="px-4 py-2 bg-orange-500 text-black rounded-full shadow-md hover:bg-orange-600 transition"
        >
          Download Resume
        </a>
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden ml-auto text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-100 shadow-md py-4 flex flex-col space-y-4 md:hidden px-6">
          {menuLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
                setIsMenuOpen(false); // close menu when clicked
              }}
              className="hover:text-orange-600 cursor-pointer text-lg"
            >
              {item.title}
            </a>
          ))}

          <a
            href={pdfFile}
            target="_blank"
            className="px-4 py-2 bg-orange-500 text-black rounded-full shadow-md text-center hover:bg-orange-600 transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
