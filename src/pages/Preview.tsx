import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Main Next Delta Logo
const NextDeltaLogo = () => (
  <img
    src="/logo.png"
    alt="Nex Delta Capital Group Logo"
    className="w-40 sm:w-50 md:w-58 object-contain"
  />
);

const HeroCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-accent min-h-screen font-sans">
      <div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden border border-gray-300 bg-white relative m-4 sm:m-6 md:m-8">
        {/* --- HEADER SECTION --- */}
        <div className="p-6 sm:p-8 pb-10 relative">
          {/* Background shapes / gradient */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-br-full transform -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary/20 to-accent/10 rounded-tl-full transform translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            {/* Top: Logo */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
              <NextDeltaLogo />
            </div>

            {/* Main headline */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 text-accent">
              Empowering Africa’s Digital Future
            </h2>

            {/* Divider */}
            <div className="border-b-1 border-secondary mb-6"></div>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-700 text-center sm:text-left">
              <strong className="text-accent">Nex Delta Capital Group</strong> is a Ghanaian
              investment and technology holding company powering Africa’s digital transformation.
              We build and manage the backbone infrastructure that connects nations, delivers content,
              and enables financial inclusion.
            </p>
            {/* Divider */}
            <div className="border-b-1 border-secondary mb-6"></div>

            {/* Services */}
            <div className="space-y-6">
             {[
  {
    title: "Telecom & Connectivity",
    desc: "K-NET delivers nationwide Internet, satellite, and fibre backbone services across Ghana and beyond.",
    logo: "/k-NET.png",
    link: "https://knetgh.com",
  },
  {
    title: "Broadcast & Media",
    desc: "WAPS powers Ghana’s digital TV and radio distribution platforms with reliable content delivery.",
    logo: "/waps.png",
    link: "https://wapsgh.com",
  },
  {
    title: "Fintech & Digital Banking",
    desc: "SwiftRoute provides secure payment systems and interoperability infrastructure for digital finance.",
    logo: "/SwiftRoute-logo.png",
    link: "https://swiftroutegh.com",
  },
  {
    title: "Renewable Energy : Solar Power Solutions",
    desc: "K-NET provides solar power systems for DTT, rural telephony, and mission-critical facilities. These solutions ensure reliable, off-grid energy and continuous network uptime.",
    logo: "/k-NET.png",
    link: "https://knetgh.com",
  },
  {
    title: "Event, Broadcast & Studio Productions",
    desc: "Silicon House Productions offers professional studios, OB vans, and live broadcast support.",
    logo: "/siliconhouse.png",
    link: "https://siliconhousegh.com",
  },
].map((service, i) => (
  <div
    key={i}
    className="flex flex-col sm:flex-row justify-between items-center gap-2 p-3 border-b-[0.5px] border-secondary last:border-b-0"
  >
    <div className="flex-1 text-center sm:text-left max-w-[70%]">
      <h3 className="text-base font-bold text-accent">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.desc}</p>
    </div>

    {/*  logo clickable */}
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
    >
      <img
        src={service.logo}
        alt={service.title}
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 
                   max-w-[150px] max-h-[150px] object-contain flex-shrink-0"
      />
    </a>
  </div>
))}

            </div>

            {/* Summary */}
            <p className="text-xs text-center mt-6 pt-4 border-t-1 border-secondary text-gray-500 italic">
              Together, these companies deliver end-to-end digital capability — from network
              to content to finance.
            </p>
          </div>
        </div>

        {/* --- AFRICACOM SECTION --- */}
        <div className="bg-accent p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-6 border-b-4 border-secondary pb-2 inline-block">
            AfricaCom 2025 Focus
          </h2>

          {/* Focus List */}
          <ul className="space-y-3 sm:space-y-4 mb-8 text-white text-sm sm:text-base">
            {[
              "Forge partnerships with satellite, fibre, and data-centre providers to expand Africa’s digital backbone.",
              "Extend broadcast and OTT reach through regional collaboration.",
              "Integrate FinTech with telecom infrastructure to power digital government and enterprise payments.",
              "Support edge computing, cloud, and smart-network deployments for public and private sector clients.",
              "Position Nex Delta Capital Group as a catalyst for Africa's digital economy.",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 font-bold">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6 sm:gap-4 mt-4 text-white">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-secondary">Richard Hlomador – Executive Chairman</p>
              <p className="font-bold text-secondary">Nex Delta Group</p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaEnvelope /> <span>rkh@knetgh.com</span>
              </p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaPhoneAlt /> <span>+233 24 435 7937</span>
              </p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaGlobe />{" "}
                <a
                  href="https://nextdeltacapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  nexdeltacapital.com
                </a>
              </p>
            </div>
          </div>

          {/* CTA Button */}
         <div className="flex justify-center mt-6">
  <button
    onClick={() => {
      window.scrollTo(0, 0);
      navigate("/main");
    }}
    className="px-8 py-3 bg-secondary text-white font-bold rounded-full border-2 border-secondary 
               hover:bg-transparent hover:text-secondary transition duration-300 text-base tracking-wide"
  >
    View Full Website
  </button>
</div>


        </div>
      </div>
    </div>
  );
};

export default HeroCard;
