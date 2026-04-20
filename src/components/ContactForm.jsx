import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message cannot be empty");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link with form data
      const mailtoLink = `mailto:bhabesh.barik.dev@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open email client
      window.location.href = mailtoLink;

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="py-14 px-6 md:px-16 bg-gray-100"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get In Touch
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have a question or want to work together? Send me a message and I'll
          get back to you as soon as possible.
        </p>

        {/* Success Message */}
        {submitted && (
          <div
            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            ✓ Thank you! Your message has been sent. I'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            ⚠ {error}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
              placeholder="Your name"
              disabled={isLoading}
              required
              aria-required="true"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
              placeholder="your.email@example.com"
              disabled={isLoading}
              required
              aria-required="true"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
              placeholder="What is this about?"
              disabled={isLoading}
              required
              aria-required="true"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition resize-none"
              rows="5"
              placeholder="Your message here..."
              disabled={isLoading}
              required
              aria-required="true"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition"
            aria-busy={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {/* Form Requirements */}
          <p className="text-xs text-gray-500 text-center">
            <span className="text-red-500">*</span> Required fields
          </p>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-10 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Other Ways to Reach Me</h3>
          <div className="space-y-2 text-sm">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:bhabesh.barik.dev@gmail.com"
                className="text-blue-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-1"
              >
                bhabesh.barik.dev@gmail.com
              </a>
            </p>
            <p>
              📱 Phone:{" "}
              <a
                href="tel:+918249878929"
                className="text-blue-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-1"
              >
                +91 8249878929
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/bhabesh-%E2%80%8Branjan-barik-42699b127"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded px-1"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
