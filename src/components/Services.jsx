import { useState } from "react";

const Services = () => {
  const [services] = useState([
    {
      id: "1",
      imagelink: "text-5xl fa-brands fa-aws",
      title: "Web Development",
      description:
        "I have a strong enthusiasm for modern web development and the rapid progress shaping the digital landscape. Each new tool or framework inspires me to craft more intuitive, efficient, and high-performing applications.",
      actionButton: {
        title: "Check here",
        link: "/check-here",
      },
    },
    {
      id: "2",
      imagelink: "text-5xl fa-solid fa-server",
      title: "Backend Development",
      description:
        "I am committed to backend engineering and modern system design. I focus on building scalable, reliable, secure, and high-performing backend services using best development practices.",
      actionButton: {
        title: "Check here",
        link: "/check-here",
      },
    },
  ]);

  return (
    <section className="py-14 bg-slate-900 text-white" aria-labelledby="services-heading" id="services-section">
      <h2 id="services-heading" className="underline text-3xl md:text-4xl text-center font-bold">
        My Services
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
              className="
                bg-slate-800 
                hover:bg-slate-700 
                rounded-xl 
                shadow-lg 
                p-6 
                text-center 
                transition
                focus-within:ring-2 focus-within:ring-blue-500
              "
              role="listitem"
              aria-label={service.title}
            >
              <i className={`${service.imagelink} mb-4`} aria-hidden="true"></i>

              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed">
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
