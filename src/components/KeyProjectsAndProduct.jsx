const KeyProjectsAndProduct = () => {
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
    <div className="py-4 my-12 px-6 bg-slate-900 text-white">
      {/* MAIN HEADING */}
      <h1 className="underline text-3xl md:text-4xl font-bold text-center">
        Key Projects & Product Highlights
      </h1>

      {/* SMALL HEADER TEXT BELOW */}
      <p className="text-center text-gray-300 mt-2 text-sm md:text-base">
        A showcase of key projects, products, and technologies I have contributed to.
      </p>

      {/* PROJECT CARDS */}
      <div className="mt-10 space-y-7 max-w-4xl mx-auto">

        {projects.map((proj) => (
          <div
            key={proj.id}
            className="
             bg-slate-800 
             hover:bg-slate-700 
              p-6 
              rounded-xl 
              shadow-lg 
              border 
              border-slate-800
              hover:shadow-2xl
              transition
            "
          >
            {/* Project Title */}
            <h2 className="text-2xl font-semibold">{proj.title}</h2>

            {/* Product Name */}
            <p className="text-[#20C4CB] font-medium mt-1">{proj.product}</p>

            {/* Description */}
            <p className="mt-4 text-gray-200 leading-relaxed">
              {proj.description}
            </p>

            {/* Technologies Used */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[#20C4CB]">
                Technologies Used:
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                {proj.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      bg-gray-200 
                      text-black 
                      px-3 
                      py-1 
                      rounded-full 
                      text-sm 
                      hover:bg-[#20C4CB] 
                      hover:text-white 
                      cursor-pointer 
                      transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default KeyProjectsAndProduct;
