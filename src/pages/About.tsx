
export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">About Next Delta Capital</h1>
          <div className="w-20 h-1 bg-secondary mx-auto my-4 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Next Delta Capital is a diversified holding group headquartered in Ghana. We build and operate
            businesses that power national digital infrastructure, financial systems, clean energy and essential services.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-3">Our Identity</h3>
            <p className="text-gray-700 leading-relaxed">
              We are builders, operators and long-term investors. We design, build and scale institutions that deliver measurable impact.
            </p>

            <h3 className="text-xl font-semibold text-accent mt-6 mb-3">Our Philosophy</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Digital infrastructure forms the backbone of modern economies</li>
              <li>Access to finance must be inclusive, secure and interoperable</li>
              <li>Clean energy and reliable water systems are essential public goods</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-3">Group Structure</h3>
            <p className="text-gray-700 leading-relaxed">
              Our portfolio spans Digital Infrastructure (K-NET, WAPS), FinTech (SwiftRoute, Providence), Renewable Energy,
              Water Manufacturing (Freshh Drops) and Media & Event Technology (Silicon House).
            </p>

            <h3 className="text-xl font-semibold text-accent mt-6 mb-3">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              We commit to building African-owned institutions that last generations — combining technical execution with responsible stewardship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
