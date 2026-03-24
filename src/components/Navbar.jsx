import React, { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setActiveSection(id);
    setShowMenu(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300
                    ${
                      scrolled
                        ? "bg-black/95 shadow-lg shadow-black/40 backdrop-blur-md"
                        : "bg-black"
                    } rounded-b-sm md:rounded-b-xl`}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex flex-col leading-none select-none"
            >
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
                FAH<span className="text-purple">I</span>M
              </span>
              <div className="w-4 h-4 bg-purple rounded-full"></div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative text-sm lg:text-base font-medium transition-colors duration-300 group
                                        ${activeSection === id ? "text-purple" : "text-white/80 hover:text-purple"}`}
                >
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-purple transition-all duration-300
                                            ${activeSection === id ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-white/80 hover:text-purple transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple/50"
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
            >
              {showMenu ? (
                <FaXmark className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`rounded-b-2xl md:hidden overflow-hidden transition-all duration-300 ease-in-out
                        ${showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 pb-6 pt-2 bg-black/95 border-t border-white/10">
            <div className="flex flex-col space-y-1">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                                        ${
                                          activeSection === id
                                            ? "text-purple bg-purple-500/10"
                                            : "text-white/80 hover:text-purple hover:bg-white/5"
                                        }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close menu on outside tap */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setShowMenu(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
