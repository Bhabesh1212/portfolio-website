const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "XYZ Technologies Pvt. Ltd.",
      duration: "2022 — Present",
      description:
        "Working as a backend engineer specializing in Spring Boot, Microservices, API Gateway integrations, cloud deployments, and designing scalable backend architectures.",
    },
    {
      id: 2,
      role: "Java Developer Intern",
      company: "ABC Software Solutions",
      duration: "2021 — 2022",
      description:
        "Developed enterprise-grade REST APIs, optimized SQL queries, supported backend modules, and collaborated with senior developers to enhance system reliability and performance.",
    },
  ];

  return (
    <div className="my-12 px-6">
      {/* ⭐ Heading (Kept as Requested) */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Work Experience
      </h1>

      {/* Experience Cards */}
      <div className="mt-10 space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="
              bg-slate-900 
              text-white 
              p-6 
              rounded-xl 
              shadow-lg 
              border 
              border-slate-800
              hover:shadow-2xl
              transition
            "
          >
            <h2 className="text-2xl font-semibold">{exp.role}</h2>

            <p className="text-[#20C4CB] font-medium mt-1">{exp.company}</p>

            <p className="text-sm text-gray-300 mt-1">{exp.duration}</p>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {exp.description}
            </p>
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
            transition
          "
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default WorkExperience;
