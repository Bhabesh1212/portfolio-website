import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Footer = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Crafted with passion for backend development. Let’s turn ideas into something extraordinary!",
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
    <footer className="py-6 bg-gray-100 border-t flex flex-col items-center text-center px-5">

      {/* ⭐ NEW HEADING */}
      <h1 className="text-lg md:text-xl font-bold text-gray-700 mt-8 mb-2">
        Let’s Connect & Collaborate
      </h1>

      <p className="text-sm text-gray-700 max-w-xl">
        I am always open to discussing new opportunities, product challenges, 
        and innovative ideas in the digital space.
      </p>

      {/* ⭐ Contact Info Box (Dark Theme) */}
      <div
        className="
          mt-4
          bg-gray-800
          border
          border-gray-700
          rounded-xl
          shadow-lg
          p-5
          w-full
          max-w-3xl
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          text-sm
          text-white
        "
      >
        {/* EMAIL */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">Email</span>
          <a
            href="mailto:bhabesh.barik.dev@gmail.com"
            className="text-[#20C4CB] hover:underline break-all mt-1"
          >
            bhabesh.barik.dev@gmail.com
          </a>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">Mobile</span>
          <span className="mt-1 text-[#20C4CB]">+91 8249878929</span>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col items-center">
          <span className="font-semibold">Location</span>
          <span className="mt-1 text-[#20C4CB]">Bhubaneswar, India</span>
        </div>
      </div>

      {/* Typed text section */}
      <div className="mt-4 text-sm italic text-gray-500 max-w-xs">
        <b>
          <span ref={el}></span>
        </b>
      </div>

      {/* Footer Credits */}
      <p className="text-sm text-gray-700 mt-3">
        © 2025 <b>Bhabesh Ranjan Barik</b> • Made with ❤️ using <b>React</b> • <b>TailwindCSS</b>
      </p>

    </footer>
  );
};

export default Footer;
