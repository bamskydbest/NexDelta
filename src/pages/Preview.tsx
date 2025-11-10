import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Main Next Delta Logo
const NextDeltaLogo = () => (
  <img
    src="/logo.png"
    alt="Next Delta Capital Group Logo"
    className="w-32 sm:w-40 md:w-48 object-contain"
  />
);

// ✅ Correct QR Code path
const QRCode = () => (
  <img
    src="/qrcode_nextdeltacapital.com.png"
    alt="QR Code"
    className="w-20 sm:w-24 md:w-28 object-contain"
  />
);

const HeroCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-light text-primary font-sans p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-3xl shadow-lg rounded-xl overflow-hidden border border-gray-200 bg-white">
        {/* --- HEADER SECTION --- */}
        <div className="p-6 sm:p-8 pb-10 relative">
          {/* Background shapes */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-br-full transform -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-tl-full transform translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            {/* Top: Logo + QR (Responsive layout) */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
              <NextDeltaLogo />
              <QRCode />
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 text-accent">
              Empowering Africa’s Digital Future
            </h2>

            <div className="border-b border-gray-200 mb-6"></div>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-700 text-center sm:text-left">
              <strong className="text-accent">Next Delta Capital Group</strong> is a Ghanaian
              investment and technology holding company powering Africa’s digital transformation.
              We build and manage the backbone infrastructure that connects nations, delivers content,
              and enables financial inclusion.
            </p>

            {/* --- SERVICES --- */}
            <div className="space-y-6">
              {[
                {
                  title: "Telecom & Connectivity",
                  desc: "K-NET delivers nationwide Internet, satellite, and fibre backbone services across Ghana and beyond.",
                  logo: "/k-NET.png",
                },
                {
                  title: "Broadcast & Media",
                  desc: "WAPS powers Ghana’s digital TV and radio distribution with reliable content delivery.",
                  logo: "/waps.png",
                },
                {
                  title: "FinTech & Digital Banking",
                  desc: "SwiftRoute provides secure payment systems and interoperability infrastructure for digital finance.",
                  logo: "/SwiftRoute-logo.png",
                },
                {
                  title: "Event, Broadcast & Studios Production",
                  desc: "Silicon House Productions offers professional studios, OB vans, and live broadcast support.",
                  logo: "/siliconhouse.png",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row justify-between items-center pb-3 border-b border-gray-100 gap-3"
                >
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base font-bold text-accent">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Summary */}
            <p className="text-xs text-center mt-6 pt-4 border-t border-gray-200 text-gray-500 italic">
              Together, these companies deliver end-to-end digital capability — from network
              to content to finance.
            </p>
          </div>
        </div>

        {/* --- AFRICACOM SECTION --- */}
        <div className="bg-background p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-secondary mb-6 border-b-4 border-accent pb-2 inline-block">
            AfricaCom 2025 Focus
          </h2>

          {/* Focus List */}
          <ul className="space-y-3 sm:space-y-4 mb-8 text-gray-700 text-sm sm:text-base">
            {[
              "Forge partnerships with satellite, fibre, and data-centre providers to expand Africa’s digital backbone.",
              "Extend broadcast and OTT reach through regional collaboration.",
              "Integrate FinTech with telecom infrastructure to power digital government and enterprise payments.",
              "Support edge computing, cloud, and smart-network deployments for public and private sector clients.",
              "Position Next Delta Capital Group as a catalyst for Africa's digital economy.",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-secondary font-bold">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* --- CONTACT INFO --- */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6 sm:gap-4 mt-4">
            {/* Contact Text */}
            <div className="text-sm sm:text-base space-y-1 text-center sm:text-left">
              <p className="font-bold text-secondary">
                Richard Hlomador – Executive Chairman
              </p>
              <p className="font-bold text-secondary">Next Delta Group</p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaEnvelope className="text-accent" /> <span>rkh@knetgh.com</span>
              </p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaPhoneAlt className="text-accent" /> <span>+233 24 435 7937</span>
              </p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaGlobe className="text-accent" />{" "}
                <a
                  href="https://nextdeltacapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  nextdeltacapital.com
                </a>
              </p>
            </div>

            {/* QR Code */}
            <div className="self-center sm:self-start">
              <QRCode />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/main")}
              className="mt-6 px-8 py-3 bg-secondary text-white font-bold rounded-full shadow-md hover:bg-accent transition duration-300 text-base tracking-wide"
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
