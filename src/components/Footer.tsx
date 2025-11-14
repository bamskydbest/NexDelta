export default function Footer() {
  return (
    <footer className="bg-primary text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">

          {/* Logo + Description */}
          <div className="flex flex-col md:w-1/3">
            <img
              src="/logoo.png"
              alt="Next Delta Logo"
              className="w-42 md:w-50 object-contain mb-4"
            />

            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Building Africa’s future through digital infrastructure,
              fintech innovation, clean energy, water systems, and
              institutional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-secondary">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-secondary">Terms of Use</a></li>
              <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
              <li><a href="/careers" className="hover:text-secondary">Careers</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-300">Email: business@nextdeltacapital.com</p>
            <p className="text-sm text-gray-300">Phone: +233 302 769 306</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-xs mt-10">
          © {new Date().getFullYear()} Next Delta Capital Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
