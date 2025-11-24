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
        min-h-screen
        flex
        justify-center
        items-center
        py-20
        px-6
        md:px-16
        mt-20
        bg-slate-900   /* ⭐ Single solid color background */
      "
    >
      {/* TEXT ONLY */}
      <div className="text-white max-w-3xl text-center md:text-left space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>

        <h1 className="text-4xl md:text-6xl font-bold">
          Bhabesh Ranjan Barik
        </h1>

        <h2 className="text-2xl md:text-4xl">
          I am a <span className="font-bold" ref={el}></span>
        </h2>

        <p className="text-base md:text-lg leading-relaxed mt-4 px-2 md:px-0">
          Welcome to my digital space! As a dedicated software engineer, I bring
          passion and proficiency to every project. I specialize in building
          scalable backend systems, Microservices, APIs, cloud deployments, and
          solving real-world engineering challenges with modern technologies.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start space-x-6 pt-4">
          <a href="https://www.instagram.com/worldofbhabesh/">
            <i className="fa-brands fa-instagram text-3xl hover:text-[#20C4CB]"></i>
          </a>

          <a href="https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127">
            <i className="fa-brands fa-linkedin text-3xl hover:text-[#20C4CB]"></i>
          </a>

          <a href="https://github.com/Bhabesh1212">
            <i className="fa-brands fa-github text-3xl hover:text-[#20C4CB]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
