import { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Services = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [services] = useState([
    {
      id: "1",
      imagelink: "text-5xl fa-solid fa-server",
      title: "Backend Systems & Payments",
      description:
        "Architecting production-grade backend services for payments, issuer workflows, and high-volume transaction processing. Building secure, scalable microservices with focus on reliability and compliance.",
      actionButton: {
        title: "Check here",
        link: "/check-here",
      },
    },
    {
      id: "2",
      imagelink: "text-5xl fa-solid fa-shield",
      title: "Secure Authentication & APIs",
      description:
        "Designing encrypted authentication systems, API gateways, and secure microservice communication patterns. Deep expertise in 3DS flows, JWT, encryption, and production-grade security architecture.",
      actionButton: {
        title: "Check here",
        link: "/check-here",
      },
    },
  ]);

  return (
    <section className={`py-14 transition-colors ${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"}`} aria-labelledby="services-heading" id="services-section">
      <h2 id="services-heading" className="underline text-3xl md:text-4xl text-center font-bold">
        What I Build
      </h2>

      <div
        className="
          mt-10 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-8 
          max-w-5xl 
          mx-auto 
          px-6
        "
        role="list"
      >
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                rounded-xl 
                shadow-lg 
                p-6 
                text-center 
                transition
                focus-within:ring-2 focus-within:ring-blue-500
                ${isDarkMode 
                  ? "bg-slate-800 hover:bg-slate-700" 
                  : "bg-white hover:bg-gray-50"
                }
              `}
              role="listitem"
              aria-label={service.title}
            >
              <i className={`${service.imagelink} mb-4 ${isDarkMode ? "text-[#20C4CB]" : "text-blue-500"}`} aria-hidden="true"></i>

              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {service.description}
              </p>

              {/* <a
                href={service.actionButton.link}
                className="
                  inline-block 
                  mt-5 
                  px-4 
                  py-2 
                  bg-orange-500 
                  rounded-full 
                  shadow 
                  hover:bg-[#20C4CB] 
                  hover:text-white 
                  transition
                "
              >
                {service.actionButton.title}
              </a> */}
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Services;
