import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Expertise = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <section className="my-12" aria-labelledby="skills-heading" id="skills-section">

      {/* BOX SECTION */}
      <div
        className={`
          mt-10 
          w-full 
          py-14 
          px-6 
          md:px-20 
          flex 
          flex-col 
          md:flex-row 
          items-center 
          justify-center 
          gap-12
          rounded-xl
          transition-colors
          ${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"}
        `}
      >
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full md:max-w-md text-center md:text-left space-y-5">
            <h2 id="skills-heading" className="underline text-3xl md:text-4xl font-bold">
              Skills & Tools
            </h2>

            <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              My focus is on leveraging technology to build efficient and
              scalable solutions. I am deeply passionate about technology and its continuous
              evolution...
            </p>
            <p></p>
            <a
              href="https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-2 font-semibold 
                bg-[#20C4CB]
                rounded-full 
                shadow-lg 
                hover:bg-[#0ddde4]
                hover:text-white 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                transition
              "
              aria-label="Connect on LinkedIn - Opens in new tab"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SKILL SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full md:max-w-lg space-y-6">
            {[
              { category: "Backend", skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Kafka"] },
              { category: "Architecture", skills: ["Microservices", "API Gateway", "JWT", "Load Balancing"] },
              { category: "Data", skills: ["PostgreSQL", "SQL", "Redis", "NoSQL"] },
              { category: "DevOps", skills: ["Docker", "Kubernetes", "Jenkins", "AWS"] },
              { category: "Frontend", skills: ["React", "Tailwind CSS"] },
            ].map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${isDarkMode ? "text-[#20C4CB]" : "text-blue-600"}`}>
                  {group.category}
                </h3>
                <div 
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${group.category} skills`}
                >
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      role="listitem"
                      className={`
                        w-fit 
                        px-3 
                        py-1.5 
                        rounded-full 
                        hover:bg-[#20C4CB] 
                        hover:text-white 
                        cursor-pointer 
                        shadow
                        text-xs md:text-sm
                        transition
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                        ${isDarkMode 
                          ? "bg-gray-700 text-white hover:text-white" 
                          : "bg-gray-200 text-black"
                        }
                      `}
                      tabIndex="0"
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
