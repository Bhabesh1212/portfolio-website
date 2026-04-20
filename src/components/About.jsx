import { useState, useContext } from "react";
import LazyImage from "./LazyImage";
import { DarkModeContext } from "../context/DarkModeContext";
import userImage from "../assets/Banner_image.svg";

const About = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [data] = useState({
    image: userImage,
    title: "Software Engineer",
    desc1:
      "I am a Software Engineer with 3+ years of experience in Java, Spring Boot, Microservices, and API Gateway-based architectures. My expertise includes building modular services, implementing secure authentication flows (JWT, OAuth), integrating REST/Kafka-based communication, and optimizing backend performance.",
    desc2:
      "I have hands-on exposure to Docker, CI/CD pipelines, Cloud services, and production-grade design patterns. With a strong interest in system design and real-world problem-solving, I aim to build reliable, scalable, and maintainable backend applications while continuously learning and adapting to modern engineering practices.",
    actionButton: {
      title: "Read More...",
      link: "/readMore",
    },
  });

  return (
    <section 
      id="about-section"
      className={`main-container py-14 px-6 md:px-16 mt-20 transition-colors ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      aria-labelledby="about-heading"
    >
      {/* Section Title */}
      <h2 
        id="about-heading"
        className="text-3xl md:text-4xl font-bold text-center underline pb-10"
      >
        About Me
      </h2>

      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <LazyImage
            src={data.image}
            alt="Profile picture of Bhabesh Ranjan Barik - Software Engineer"
            className="w-3/4 md:w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="space-y-5 text-center md:text-left max-w-xl">
            <h3 className="text-3xl md:text-5xl font-semibold">{data.title}</h3>

            <p className={`text-base md:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{data.desc1}</p>
            <p className={`text-base md:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{data.desc2}</p>

            {/* <a
              href={data.actionButton.link}
              className="inline-block bg-orange-600 rounded-full shadow-lg px-6 py-2 text-white font-medium hover:bg-orange-700 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              aria-label={data.actionButton.title}
            >
              {data.actionButton.title}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
