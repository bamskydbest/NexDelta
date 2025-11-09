import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Next Delta Capital Group";
  const typingSpeed = 100; // ms per letter

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative flex flex-col justify-center items-start px-6 md:px-20 py-32 md:py-40 text-left overflow-hidden"
      >
        {/* Background Image with heartbeat animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/africa.jpg')" }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [1, 0.98, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            {displayText}
            {displayText.length < fullText.length && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-8 bg-white ml-1 align-middle"
              />
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-2xl font-medium text-gray-100"
          >
            Empowering Africa’s Digital Future
          </motion.p>
        </div>
      </section>
{/* INTRODUCTION */}
<section
  id="intro"
  className="w-full bg-accent mt-4 text-white px-12 md:px-20 py-6 md:py-10 text-center scroll-mt-4"
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-5xl font-bold mb-2"
  >
    Introduction
  </motion.h2>

  {/* Small underline */}
  <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>

  <p className="leading-relaxed text-base md:text-lg text-gray-100 max-w-4xl mx-auto text-left">
    Next Delta Capital Group is a Ghanaian investment and technology holding
    company powering Africa’s digital transformation. We build and manage the
    backbone infrastructure that connects nations, delivers content, and
    enables financial inclusion.
  </p>
</section>



      {/* ECOSYSTEM SECTION */}
<section id="ecosystem" className="bg-white py-8 px-6 mt-4 scroll-mt-20">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold text-primary text-center mb-2"
    >
      Our Integrated Ecosystem
    </motion.h2>

    {/* Small underline */}
    <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Telecom & Connectivity",
          desc: "K-NET: national Internet, satellite, and fiber backbone.",
        },
        {
          title: "Broadcast & Media",
          desc: "WAPS: nationwide digital TV and radio distribution platforms.",
        },
        {
          title: "Fintech & Digital Banking",
          desc: "SwiftRoute: secure payment systems, mobile banking, and interoperability infrastructure.",
        },
        {
          title: "Event Production & Studios",
          desc: "Silicon House Productions: professional studios, OB vans, and large-scale live production support for broadcasters on the K-NET platform.",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="group bg-light shadow-lg rounded-2xl p-6 border-t-4 border-secondary text-primary cursor-pointer
                     hover:bg-accent"
        >
          <h3 className="text-xl font-bold mb-3 group-hover:text-white">
            {card.title}
          </h3>
          <p className="group-hover:text-white">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* SUMMARY */}
      <section
        id="summary"
        className="bg-accent text-white text-center px-6 py-4 scroll-mt-20"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-xl md:text-2xl font-medium leading-relaxed"
        >
          Together, these companies deliver end-to-end digital capability — from
          network to content to finance.
        </motion.p>
      </section>

    {/* FOOTER */}
<footer className="bg-primary text-gray-200 py-6">
  <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
    {/* Logo aligned to the left */}
    <img
      src="/logo.png"
      alt="Next Delta Logo"
      className="w-36 md:w-44 object-contain"
    />

    {/* Copyright text aligned to the right */}
    <p className="text-sm md:text-base">
      © {new Date().getFullYear()} Next Delta Capital Group. All rights reserved.
    </p>
  </div>
</footer>




    </div>
  );
}
