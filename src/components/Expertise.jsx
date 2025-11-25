const Expertise = () => {
  return (
    <div className="my-12">

      {/* BOX SECTION */}
      <div
        className="
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
          bg-slate-900
          text-white
          rounded-xl
        "
      >
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full md:max-w-md text-center md:text-left space-y-5">
            <h1 className="underline text-3xl md:text-4xl font-bold">
              Skills & Tools
            </h1>

            <p className="text-base md:text-lg leading-relaxed">
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
                transition
              "
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SKILL SECTION */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:max-w-lg">
            {[
              "Core Java",
              "J2EE",
              "Spring Framework",
              "Spring Boot",
              "Spring Security",
              "JWT",
              "Spring Cloud",
              "Hibernate",
              "REST & SOAP",
              "Microservices",
              "Tailwind CSS",
              "ReactJS",
              "State Management",
              "SQL",
              "NoSQL",
              "Kafka",
              "Docker",
              "Jenkins",
              "Kubernetes",
              "Load Balancer",
              "AWS",
            ].map((skill, index) => (
              <p
                key={index}
                className="
                  bg-gray-200 
                  w-fit 
                  px-4 
                  py-2 
                  rounded-full 
                  mt-2 
                  hover:bg-[#20C4CB] 
                  hover:text-white 
                  cursor-pointer 
                  shadow
                  text-black
                  text-sm md:text-base
                  transition
                "
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
