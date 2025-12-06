import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Developer", "Web Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      className="
        w-full
        min-h-[45vh]        /* ⭐ Reduced height */
        flex
        justify-center
        items-center
        py-10               /* ⭐ Smaller padding */
        px-5
        md:px-12
        bg-slate-800
        mt-14
      "
    >
      {/* TEXT SECTION */}
      <div className="text-white max-w-2xl text-center md:text-left space-y-3">
        
        <h3 className="text-lg md:text-2xl font-semibold">
          Hi, I am
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Bhabesh Ranjan Barik
        </h1>

        <h2 className="text-xl md:text-3xl">
          I am a <span className="font-bold text-[#20C4CB]" ref={el}></span>
        </h2>

        <p className="text-sm md:text-base leading-relaxed mt-3 px-2 md:px-0">
          Welcome to my digital space! I am a backend engineer specializing in 
          building scalable systems, microservices, APIs, and solving real-world 
          engineering challenges.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start space-x-5 pt-3">
          <a href="https://www.instagram.com/worldofbhabesh/">
            <i className="fa-brands fa-instagram text-2xl hover:text-[#20C4CB] transition"></i>
          </a>

          <a href="https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127">
            <i className="fa-brands fa-linkedin text-2xl hover:text-[#20C4CB] transition"></i>
          </a>

          <a href="https://github.com/Bhabesh1212">
            <i className="fa-brands fa-github text-2xl hover:text-[#20C4CB] transition"></i>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Banner;
