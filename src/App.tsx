import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import LeadershipSection from "./components/LeadershipSection";

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

  // Background slideshow setup
  const backgroundImages = ["/afrr.jpg", "/afrrr.jpg"]; // two images
  const slideDuration = 8000; // 8 seconds per slide
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

     {/* HERO SECTION */}
<section
  id="hero"
  className="relative flex flex-col justify-center items-center px-6 md:px-20 py-[15rem] md:py-[18rem] text-center overflow-hidden"
>
  {/* Background Image Slideshow */}
  <div className="absolute inset-0 z-0">
    {backgroundImages.map((img, index) => (
      <motion.div
        key={index}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
        animate={{
          opacity: currentIndex === index ? 1 : 0,
          scale: currentIndex === index ? 1.02 : 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  {/* Hero Text */}
<div className="relative z-10 max-w-full text-primary">
  <motion.h1
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 leading-tight whitespace-nowrap"
    style={{ wordBreak: "keep-all" }}
  >
    {displayText}
    {displayText.length < fullText.length && (
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-2 h-10 bg-white ml-1 align-middle"
      />
    )}
  </motion.h1>

  {/* Small Underline */}
  <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 1 }}
    className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-primary"
  >
    Empowering Africa’s Digital Future
  </motion.p>
</div>

</section>



      {/* INTRODUCTION */}
      <section
        id="intro"
        className="w-full bg-accent  text-white px-12 md:px-20 py-6 md:py-10 text-center scroll-mt-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-2"
        >
          Introduction
        </motion.h2>

        <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>

        <p className="leading-relaxed text-base md:text-lg text-gray-100 max-w-4xl mx-auto text-left">
          Next Delta Capital Group is a Ghanaian investment and technology
          holding company powering Africa’s digital transformation. We build
          and manage the backbone infrastructure that connects nations,
          delivers content, and enables financial inclusion.
        </p>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section id="ecosystem" className="bg-white py-8 px-6 mt-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-primary text-center mb-2"
          >
            Our Integrated Ecosystem
          </motion.h2>

          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-fr">
  {[
    {
      title: "Telecom & Connectivity",
      desc: "K-NET: national Internet, satellite, and fiber backbone.",
      logo: "/k-NET.png",
      link: "https://knetgh.com",
    },
    {
      title: "Broadcast & Media",
      desc: "WAPS: nationwide digital TV and radio distribution platforms.",
      logo: "/waps.png",
      link: "https://wapsgh.com",
    },
    {
      title: "Fintech & Digital Banking",
      desc: "SwiftRoute: secure payment systems, mobile banking, and interoperability infrastructure.",
      logo: "/SwiftRoute-logo.png",
      link: "https://swiftroutegh.com",
    },
    {
      title: "Event Production & Studios",
      desc: "Silicon House Productions: professional studios, OB vans, and large-scale live production support for broadcasters on the K-NET platform.",
      logo: "/siliconhouse.png",
      link: "https://siliconhousegh.com",
    },
  ].map((card, i) => (
    <motion.a
      key={i}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group bg-light shadow-lg rounded-2xl px-4 pt-2 pb-3 border-t-4 border-secondary text-primary cursor-pointer hover:bg-accent flex flex-col items-start min-h-[280px] w-full lg:min-w-[260px]"
    >
      <img
        src={card.logo}
        alt={card.title}
        className="w-32 h-32 md:w-32 md:h-32 object-contain mb-1 mt-1"
      />

      <h3 className="text-lg font-bold mb-1 group-hover:text-white whitespace-nowrap overflow-ellipsis overflow-hidden">
        {card.title}
      </h3>

      <p className="group-hover:text-white text-left text-sm">
        {card.desc}
      </p>
    </motion.a>
  ))}
</div>

        </div>
      </section>

     <LeadershipSection/>



      <Contact />

      {/* FOOTER */}
      <footer className="bg-primary text-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <img
            src="/logo.png"
            alt="Next Delta Logo"
            className="w-42 md:w-50 object-contain"
          />
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Next Delta Capital Group. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
