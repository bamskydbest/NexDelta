
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState(""); // to show success message

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Office Location",
      content: <>No.12 Roman Ridge Street, Roman Ridge, Accra, Ghana</>,
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Let's Talk",
      content: (
        <>
          Front Desk: +233 302 769 306 <br />
        </>
      ),
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "E-mail Us",
      content: <>business@nextdeltacapital.com</>,
    },
    {
      icon: <FaClock size={24} />,
      title: "Available 24 Hours",
      content: <>Service Desk: +233 302 770 833</>,
    },
  ];

  return (
    <section id="contact" className="bg-white py-16 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-primary mb-2"
        >
          Contact Us
        </motion.h2>

        {/* Small underline */}
        <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-accent text-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:bg-primary"
            >
              <div className="mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-sm md:text-base leading-relaxed">{info.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-primary mb-6"
          >
            Send Us a Message
          </motion.h3>

          {/* Status Message */}
          {status && <p className="text-green-600 font-medium mb-4">{status}</p>}

          <form
            className="bg-light rounded-2xl shadow-lg p-8 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              // Open mail client
              window.location.href = `mailto:business@nextdeltacapital.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;

              // Show success message
              setStatus("Your message is ready to send!");

              // Clear form fields
              form.reset();

              // Hide message after 5 seconds
              setTimeout(() => setStatus(""), 5000);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
