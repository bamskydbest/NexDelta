import { motion } from "framer-motion";

const BusinessCard = ({ title, bullets, logo }: { title: string; bullets: string[]; logo?: string }) => (
  <motion.article
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl p-6 shadow flex flex-col gap-4 min-h-[260px]"
  >
    {logo && <img src={logo} alt={title} className="w-20 h-20 object-contain mx-auto" />}
    <h3 className="font-bold text-accent text-lg text-center">{title}</h3>
    <ul className="text-gray-700 list-disc list-inside text-sm space-y-1">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </motion.article>
);

export default function Businesses() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Our Businesses</h1>
          <div className="w-20 h-1 bg-secondary mx-auto my-4 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            A portfolio of companies that function together as a growth engine for national and regional development.
          </p>
        </header>

        {/* First row of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BusinessCard
            logo="/k-NET.png"
            title="Digital Infrastructure & ICT"
            bullets={[
              "National satellite platforms, broadband and teleports",
              "OTT & IPTV distribution",
              "Rural connectivity and mission-critical NOC operations",
            ]}
          />
          <BusinessCard
            logo="/waps.png"
            title="Broadcast & Media"
            bullets={[
              "Digital TV and radio distribution platforms",
              "Reliable content delivery across Ghana",
              "Supporting nationwide broadcast infrastructure",
            ]}
          />
          <BusinessCard
            logo="/SwiftRoute-logo.png"
            title="FinTech & Financial Services"
            bullets={[
              "Government revenue collection platforms",
              "Payment gateways and mobile integrations",
              "Microinsurance and digital-first banking solutions",
            ]}
          />
        </div>

        {/* Second row of 3 cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BusinessCard
            logo="/k-NET-solar.png"
            title="Renewable Energy & Solar"
            bullets={[
              "Utility-scale solar IPP and telecom solar solutions",
              "Off-grid systems for remote sites and community power",
              "Hybrid energy management for mission-critical services",
            ]}
          />
          <BusinessCard
            logo="/siliconhouse.png"
            title="Media, Broadcast & Event Technology"
            bullets={[
              "Studios and OB van deployments",
              "Live event production and broadcast connectivity",
              "Content production and distribution services",
            ]}
          />
          <BusinessCard
            logo="/freshhdrops.png"
            title="Water Manufacturing & Distribution"
            bullets={[
              "Freshh Drops manufacturing and supply",
              "Modular solar-powered water centres",
              "Scalable retail & wholesale distribution",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
