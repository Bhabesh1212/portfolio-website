import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const WorkExperience = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const experiences = [
    {
      id: 1,
      role: "Software Engineer-2",
      company: "IserveU Technologies Pvt. Ltd.",
      duration: "2023 Feb — Present",
      description: [
        "Designed and built issuer transaction workflows for prepaid card systems, including authorization, reconciliation, and settlement processing.",
        "Implemented secure API gateway routing, JWT-based authentication, and transaction-level logging for payments and issuer integrations.",
        "Collaborated with QA, product, and backend teams to improve maintainability, resilience, and deployment readiness for critical payment services.",
      ],
    },
    {
      id: 2,
      role: "Java Developer",
      company: "Inspirisys Solutions Ltd",
      duration: "2022 Nov — 2023 Jan",
      description: [
        "Delivered enterprise REST APIs and backend services for financial domain workflows, focusing on reliability and secure data handling.",
        "Optimized performance for API endpoints and database interactions to support higher transaction volume.",
        "Worked closely with senior engineers to deploy maintainable Java services and integrate monitoring for production readiness.",
      ],
    },
  ];

  return (
    <section className={`py-3 my-12 px-6 transition-colors ${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"}`} aria-labelledby="work-heading" id="experience-section">
      {/* Heading */}
      <h2 id="work-heading" className="underline text-3xl md:text-4xl font-bold text-center">
        Work Experience
      </h2>

      {/* Experience Cards */}
      <div className="mt-10 space-y-8 max-w-4xl mx-auto" role="list">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`
              p-6 
              rounded-xl 
              shadow-lg 
              border 
              hover:shadow-2xl
              transition
              ${isDarkMode 
                ? "bg-slate-800 text-white border-slate-700 hover:bg-slate-700" 
                : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
              }
            `}
          >
            <h2 className="text-2xl font-semibold">{exp.role}</h2>

            <p className="text-[#20C4CB] font-medium mt-1">{exp.company}</p>

            <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{exp.duration}</p>

            <ul className="mt-4 list-disc list-inside space-y-3">
              {exp.description.map((detail, index) => (
                <li key={index} className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 
            bg-[#20C4CB] 
            font-semibold 
            rounded-full 
            shadow-lg 
            hover:bg-[#1FB5BC] 
            hover:text-white 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
            transition
          "
          aria-label="Connect on LinkedIn - Opens in new tab"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default WorkExperience;
