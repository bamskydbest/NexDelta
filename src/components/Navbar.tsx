import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

// ✅ Type definition for nav items
type NavItem = 
  | { name: string; path: string }  // Router links
  | { name: string; id: string };   // Scroll links

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Nav items: use path for router, id for scroll (Contact)
  const navItems: NavItem[] = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Our Businesses", path: "/our-businesses" },
    { name: "Strategy & Impact", path: "/strategy-impact" },
    { name: "Leadership", path: "/leadership" },
    { name: "Insights & News", path: "/insights-news" },
    { name: "Contact Us", path: "/contact" },

    
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white`}
    >
      {/* Logo Row */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-2">
        <img
          src="/logoo.png"
          alt="Next Delta Capital Group"
          className="w-40 md:w-50 object-contain"
        />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="max-w-6xl mx-auto px-6 -mt-1">
        <ul className="hidden md:flex gap-12 mb-2 text-accent text-base md:text-lg font-semibold">
          {navItems.map((item) =>
            "path" in item ? (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer hover:text-primary transition-colors ${
                      isActive ? "text-primary" : "text-accent"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  offset={-80}
                  duration={600}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col items-start py-4 pl-6 space-y-4 text-black text-lg">
              {navItems.map((item) =>
                "path" in item ? (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className="text-gray-700 text-base py-2"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ) : (
                  <li key={item.id}>
                    <Link
                      to={item.id}
                      smooth
                      offset={-80}
                      duration={600}
                      className="cursor-pointer hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
