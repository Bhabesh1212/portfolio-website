import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Testimonials = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const testimonials = [
    {
      id: 1,
      name: "Raj Kumar",
      title: "Tech Lead, IserveU Technologies",
      company: "IserveU Technologies Pvt. Ltd.",
      message:
        "Bhabesh is an exceptional backend engineer with deep expertise in microservices and system design. His work on the prepaid card issuer platform was instrumental in achieving RuPay certification. Highly recommended!",
      image: "👨‍💼",
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Project Manager",
      company: "Inspirisys Solutions Ltd",
      message:
        "Working with Bhabesh was a pleasure. He demonstrates strong problem-solving skills and excellent knowledge of Spring Boot and REST APIs. He consistently delivers quality code on time.",
      image: "👩‍💼",
    },
    {
      id: 3,
      name: "Arjun Patel",
      title: "Senior Architect",
      company: "FinTech Solutions",
      message:
        "Bhabesh's understanding of secure payment processing and encryption protocols is outstanding. His 3DS implementation was robust and passed all security audits. A true backend expert!",
      image: "👨‍💻",
    },
  ];

  return (
    <section
      id="testimonials-section"
      className={`py-14 px-6 md:px-16 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          What People Say
        </h2>

        <p className={`text-center mb-12 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Feedback from colleagues, clients, and mentors I've worked with.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 ${
                isDarkMode
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-gray-200"
              }`}
              role="article"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl" aria-hidden="true">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Message */}
              <p
                className={`mb-6 leading-relaxed italic ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                "{testimonial.message}"
              </p>

              {/* Divider */}
              <div
                className={`mb-4 h-1 ${isDarkMode ? "bg-slate-600" : "bg-gray-300"}`}
              ></div>

              {/* Author Info */}
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="text-4xl">{testimonial.image}</div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {testimonial.title}
                  </p>
                  <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Want to work together?
          </p>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition"
            aria-label="Scroll to contact section"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
