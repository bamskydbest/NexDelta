
export default function Strategy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Strategy & Impact</h1>
          <div className="w-20 h-1 bg-secondary mx-auto my-4 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">We build anchor institutions that deliver long-term value to nations and communities.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-3">Build National-Grade Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              We invest in platforms used by millions — from broadcast infrastructure to national payment systems. These assets are foundational for economic resilience.
            </p>

            <h3 className="text-xl font-semibold text-accent mt-6 mb-3">Integrate Sector Capabilities</h3>
            <p className="text-gray-700">
              Our divisions are designed to strengthen one another — fintech enables payments for energy and water; connectivity supports media and enterprise applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-3">Support Governments & Institutions</h3>
            <p className="text-gray-700">
              We partner with public institutions to deliver digitalization, revenue collection, rural connectivity and utility-grade services.
            </p>

            <h3 className="text-xl font-semibold text-accent mt-6 mb-3">Measure Sustainable Impact</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Millions connected via broadcast and digital platforms</li>
              <li>Megawatts delivered through solar IPPs</li>
              <li>Thousands served via modular water centres</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
