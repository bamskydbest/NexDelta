import { useState } from "react";
import { motion } from "framer-motion";



export default function LeadershipSection() {
  const [showChairmanInfo, setShowChairmanInfo] = useState(false);

  const accentColor = "text-secondary"; // use same color as quote icon
  const orangeColor = "text-secondary"; // for the chairman name under quote

  return (
    <section id="leadership" className="bg-accent text-white py-16 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Chairman Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 mb-12">
          {/* Chairman Photo */}
          <motion.img
            src="/chairman.jpg"
            alt="Richard Hlomador"
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Quote and Bio */}
          <div className="flex-1 text-center md:text-left">
            <div className={`text-6xl mb-4 ${accentColor}`}>❝</div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl font-medium mb-4"
            >
              Africa’s next economic leap will be led by those who build, not by those who wait.
              <br />
              At Next Delta Capital, we invest in Africa’s power to create, connect, and compete globally.
            </motion.p>
            <p className={`font-bold text-lg md:text-xl mb-4 text-right ${orangeColor}`}>
              — Richard Hlomador, Executive Chairman
            </p>

            <motion.button
              onClick={() => setShowChairmanInfo(!showChairmanInfo)}
              className="bg-white text-accent px-6 py-2 rounded-full font-medium hover:bg-secondary hover:text-white transition-colors"
            >
              {showChairmanInfo ? "Read Less" : "Read More"}
            </motion.button>

            {showChairmanInfo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-left space-y-4 text-base md:text-lg"
              >
                <h3 className="text-2xl font-bold mb-2">About the Chairman</h3>
                <p>
                  Richard Hlomador is one of Africa’s pioneering engineers and entrepreneurs in telecommunications, satellite, and broadcast infrastructure.
                </p>
                <p>
                  As Founder and Executive Chairman of K-NET Ghana Ltd, he has built some of the continent’s most advanced digital networks — from national Digital Terrestrial Television (DTT) systems to rural GSM, satellite teleports, and renewable power integration.
                </p>
                <p>
                  Under his leadership, Next Delta Capital Group oversees a strategic ecosystem of companies driving Africa’s digital future:
                  <ul className="list-disc list-inside mt-2">
                    <li>K-NET</li>
                    <li>WAPS (West African Platform Services)</li>
                    <li>SwiftRoute Ltd</li>
                    <li>Silicon House Productions</li>
                  </ul>
                </p>
                <p>
                  Recognised by the International Telecommunication Union (ITU) for his pioneering contributions to rural connectivity and broadcast innovation, Richard continues to champion African-engineered solutions that connect economies, empower enterprises, and drive sustainable growth.
                </p>
              </motion.div>
            )}
          </div>
        </div>

      {/* Vision Section */}
<div className="mb-12">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
    Vision for the Future
  </h2>
  {/* Small Underline */}
  <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
  <p className="text-lg md:text-xl max-w-4xl mx-auto text-left">
    At Next Delta Capital, our purpose is to drive Africa’s digital and financial transformation through intelligent investment and strategic partnerships.
    <br />
    We believe in a future where innovation, infrastructure, and impact converge — creating systems that empower nations, industries, and people.
  </p>
</div>

{/* Chairman Message Section */}
<div className="mb-12">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
    Chairman’s Message
  </h2>
  {/* Small Underline */}
  <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
  <p className="text-lg md:text-xl max-w-4xl mx-auto text-left">
    At Next Delta Capital, we are guided by one conviction: Africa must own its digital destiny.
    <br />
    Our mission is to build, invest, and accelerate enterprises that transform connectivity, commerce, and community across the continent. <br />
    <br />
    Over my four-decade journey in engineering, telecommunications, and infrastructure development, I have seen how technology can redefine possibility. From building Ghana’s national satellite networks to advancing renewable power and digital finance systems, each success reinforced a simple truth — that when Africans innovate locally, they create value that endures globally. <br />
    <br />
    Next Delta Capital stands at the intersection of technology and transformation. We invest not merely in ideas, but in ecosystems — uniting the best of engineering, finance, and governance to drive sustainable growth. Every venture we support reflects our belief in discipline, integrity, and purpose-driven innovation. <br />
    <br />
    Our goal is not just to fund progress but to engineer it — to help build a resilient digital Africa capable of competing on the world stage. Together with our partners, we are shaping a new generation of enterprises that deliver measurable impact, unlock inclusive opportunity, and strengthen Africa’s position in the global economy. <br />
    <br />
    <span className="font-bold">{`Richard Hlomador`}</span><br />
    Executive Chairman, Next Delta Capital
  </p>
</div>



     {/* Management Team Header */}
<h2 className="text-2xl md:text-4xl font-bold text-center mb-8 relative">
  Management Team
  {/* Small Underline */}
  <span className="block mx-auto mt-2 w-16 h-1 bg-secondary rounded-full"></span>
</h2>

{/* Executive Chairman Profile Card */}
<div className="flex justify-center mb-12">
  <motion.a
    href="https://www.linkedin.com/in/richard-hlomador-641516a/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="bg-light text-accent rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full sm:w-[45%] md:w-[40%] lg:w-[35%] max-w-[385px] hover:bg-secondary hover:text-white transition-colors duration-300"
  >
    <img
      src="/chairman.jpg"
      alt="Richard Hlomador"
      className="w-40 h-40 rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-bold mb-1">Richard Hlomador</h3>
    <p className="text-gray-700">Executive Chairman</p>
  </motion.a>
</div>

<div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
  {[
    {
      name: "Richard Jake Hlomador",
      title: "COO",
      photo: "/adolph.jpg",
      link: "https://www.linkedin.com/in/richard-j-hlomador-6669b5a6/",
      flip: true, 
    },
    {
      name: "Adolph Kpesese",
      title: "CTO",
      photo: "/richard-jake.jpg",
      link: "https://www.linkedin.com/in/adolph-kpesese-b307a432/",
      flip: false,
    },
    {
      name: "Enoch Sekyi",
      title: "CFO",
      photo: "/placeholder-person.png",
      link: "#",
      flip: false,
    },
  ].map((leader, i) => (
    <motion.a
      key={i}
      href={leader.link || "#"}
      target={leader.link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-light text-primary rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-secondary hover:text-white transition-colors duration-300 w-full sm:w-[40%] md:w-[30%] lg:w-[28%] max-w-[385px]"
    >
      <img
        src={leader.photo || "/placeholder-person.png"}
        alt={leader.name}
        className={`w-40 h-40 rounded-full object-cover mb-4 ${leader.flip ? "scale-x-[-1]" : ""}`}
      />
      <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
      <p className="text-gray-700 group-hover:text-white">{leader.title}</p>
    </motion.a>
  ))}
</div>





      </div>
    </section>
  );
}
