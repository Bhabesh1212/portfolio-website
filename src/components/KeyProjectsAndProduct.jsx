import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const KeyProjectsAndProduct = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const projects = [
    {
      id: 1,
      title: "Prepaid Card Issuer Transaction Switch",
      product: "Prepaid Card Issuer POS Switch",
      description:
        "Did RuPay certification and implemented prepaid card authorization, reconciliation, settlement, and issuer integrations with secure rule-based processing.",
      techStack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "PostgreSQL",
        "3DES/AES Encryption",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      id: 2,
      title: "API Gateway Based Microservices Platform",
      product: "Backend Modernization Platform",
      description:
        "Developed microservices architecture with centralized authentication, routing, rate-limiting, and scalable backend design.",
      techStack: [
        "Spring Cloud",
        "Spring Security",
        "JWT",
        "API Gateway",
        "ELK Stack",
        "Docker",
        "CI/CD",
      ],
    },
    {
      id: 3,
      title: "3DS ACS Server Processing",
      product: "Secure Issuer Authentication Service",
      description:
        "Implemented full 3DS 2.x flow including CReq/CRes processing, JWE encryption, risk evaluation, and session expiry management.",
      techStack: [
        "Java",
        "Spring Boot",
        "JWE/JWS",
        "3DS 2.x Protocol",
        "Redis",
        "Timers",
        "Encryption",
      ],
    },
  ];

  return (
    <section className={`py-4 my-12 px-6 transition-colors ${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"}`} aria-labelledby="projects-heading" id="projects-section">
      {/* MAIN HEADING */}
      <h2 id="projects-heading" className="underline text-3xl md:text-4xl font-bold text-center">
        Key Projects & Product Highlights
      </h2>

      {/* SMALL HEADER TEXT BELOW */}
      <p className={`text-center mt-2 text-sm md:text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        A showcase of key projects, products, and technologies I have contributed to.
      </p>

      {/* PROJECT CARDS */}
      <div className="mt-10 space-y-7 max-w-4xl mx-auto" role="list">

        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`
              p-6 
              rounded-xl 
              shadow-lg 
              border 
              hover:shadow-2xl
              transition
              focus-within:ring-2 focus-within:ring-blue-500
              ${isDarkMode 
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700" 
                : "bg-white border-gray-200 hover:bg-gray-50"
              }
            `}
            role="listitem"
            aria-label={`${proj.title} project`}
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold">{proj.title}</h3>

            {/* Product Name */}
            <p className="text-[#20C4CB] font-medium mt-1">{proj.product}</p>

            {/* Description */}
            <p className={`mt-4 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              {proj.description}
            </p>

            {/* Technologies Used */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#20C4CB]">
                Technologies Used:
              </h4>

              <div className="flex flex-wrap gap-2 mt-2" role="list" aria-label="Technologies used in this project">
                {proj.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`
                      px-3 
                      py-1 
                      rounded-full 
                      text-sm 
                      cursor-pointer 
                      transition
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                      ${isDarkMode
                        ? "bg-gray-700 text-white hover:bg-[#20C4CB]"
                        : "bg-gray-200 text-black hover:bg-[#20C4CB] hover:text-white"
                      }
                    `}
                    role="listitem"
                    tabIndex="0"
                    aria-label={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default KeyProjectsAndProduct;
