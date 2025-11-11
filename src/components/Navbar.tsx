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
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white`}
    >
      {/* Logo Row (Desktop unchanged, Mobile flex justify-between) */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-1">
        <img
          src="/logo.png"
          alt="Next Delta Capital Group"
          className="w-40 md:w-50 object-contain"
        />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Desktop Nav List (unchanged) */}
      <div className="max-w-6xl mx-auto px-6 -mt-1">
        <ul className="hidden md:flex gap-12 mb-2 text-accent text-base md:text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                offset={-80}
                duration={600}
                className="cursor-pointer hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col items-start py-4 pl-6 space-y-4 text-black text-lg">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth
                    offset={-80}
                    duration={600}
                    className="cursor-pointer hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
