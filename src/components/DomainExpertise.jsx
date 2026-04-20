import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const domainExpertise = [
  {
    id: 1,
    title: "Payments, Issuer Systems, Transaction Lifecycle",
    description:
      "Built issuer-side transaction systems, authorization flows, settlement engines, and compliance-ready payment integrations for high-volume fintech workloads. Experience spans prepaid card processing, reconciliation, and multi-currency payment workflows.",
  },
  {
    id: 2,
    title: "3DS Authentication, Encryption, Secure API Flows",
    description:
      "Delivered 3DS authentication journeys, JWT-based authorization, encrypted payload handling, and resilient backend flows where security and availability are both critical. Deep expertise in risk-aware flow control and secure session management.",
  },
  {
    id: 3,
    title: "Microservices, Gateway Integration, Event-Driven Design",
    description:
      "Built distributed backend services with API gateway patterns, scalable service communication, observability, and production-grade reliability. Focused on event-driven architecture and maintaining system resilience at scale.",
  },
];

const productionWins = [
  {
    id: 1,
    label: "Payments & Compliance Architecture",
    detail:
      "Led issuer transaction workflow design meeting RuPay certification and compliance standards. Built resilient settlement and reconciliation engines handling high transaction volumes.",
  },
  {
    id: 2,
    label: "Secure Authentication & Encryption",
    detail:
      "Implemented end-to-end 3DS authentication flows with encrypted request-response cycles, risk-aware routing, and PCI-compliant payload handling across distributed services.",
  },
  {
    id: 3,
    label: "Production Support & Deployment Readiness",
    detail:
      "Built observability-first microservices with structured logging, metrics, and alerting. Established deployment automation and incident response patterns supporting zero-downtime releases.",
  },
  {
    id: 4,
    label: "Reliability Mindset & Cross-Functional Delivery",
    detail:
      "Collaborated across product, QA, and platform teams to ship backend changes cleanly, maintain SLOs, and support seamless integration in complex fintech environments.",
  },
];

const DomainExpertise = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="domain-expertise-section"
      className={`py-14 px-6 md:px-16 transition-colors ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      aria-labelledby="domain-expertise-heading"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        <div>
          <h2
            id="domain-expertise-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Domain Expertise
          </h2>

          <p
            className={`text-center max-w-3xl mx-auto mb-10 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A backend-focused mix of fintech exposure, secure transaction flows,
            and platform engineering experience built through real product work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {domainExpertise.map((item) => (
              <article
                key={item.id}
                role="listitem"
                className={`rounded-xl border p-6 shadow-lg transition-transform hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p
                  className={`leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Production Wins
          </h2>

          <p
            className={`text-center max-w-3xl mx-auto mb-10 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A few practical outcomes and responsibilities that better reflect my
            contribution than generic recommendations.
          </p>

          <div
            className={`rounded-2xl border p-6 md:p-8 shadow-lg ${
              isDarkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {productionWins.map((item) => (
                <div
                  key={item.id}
                  role="listitem"
                  className={`rounded-xl p-5 border ${
                    isDarkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-[#20C4CB] mb-2">
                    {item.label}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="#contact-section"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById("contact-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition"
                aria-label="Scroll to contact section"
              >
                Discuss Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
