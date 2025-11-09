import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "intro", label: "Introduction" },
    { id: "ecosystem", label: "Ecosystem" },
    { id: "summary", label: "Summary" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-primary`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Image */}
        <img
          src="/logo.png"
          alt="Next Delta Capital Group"
          className="w-36 md:w-44 object-contain"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                offset={-80}
                duration={600}
                className="cursor-pointer hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="bg-primary md:hidden"
        >
          <ul className="flex flex-col items-center py-4 space-y-4 text-white text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  offset={-80}
                  duration={600}
                  className="cursor-pointer hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
