import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kad7m9s",
        "template_x94i61z",
        formData,
        "2OTfENlzvx0u0BzkR"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Error sending message!");
        }
      );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 h-[100vh]">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      {/* Google Map */}
      <div className="w-[50vw] h-64 mb-6">
        <iframe
          title="Google Map"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4232.729355101764!2d-84.3038144!3d30.4380174!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1743879761667!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
