"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export default function LuxuryHotelNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false);
  const [isMobileRoomsOpen, setIsMobileRoomsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    {
      name: "Rooms & Suites",
      href: "/rooms",
      hasDropdown: true,
      subLinks: [
        { name: "Phantom Affluent", href: "/phantomAffluent" },
        { name: "Phantom Royal", href: "/phantomRoyal" },
        { name: "Phantom Mini Rolls Royce", href: "/phantomMiniRollsR" },
        { name: "Phantom Cullinan", href: "/phantomCullinan" },
        {
          name: "Phantom Rolls Royce Pent House",
          href: "/phantomRollsRoycePH",
        },
        {
          name: "Phantom RR Premium Suite",
          href: "/phantomRollsRoycePremiumSuite",
        },
        { name: "Phantom Cullinan Luxury", href: "/phantomCullinanLuxury" },
      ],
    },
    { name: "Dining", href: "/dining" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRoomsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl shadow-black/20"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => setActiveLink("Home")}
              className="group flex items-center"
            >
              <img
                src="/logoi.png"
                alt="De Phantom Continental Hotel"
                className="h-12 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  ref={link.hasDropdown ? dropdownRef : null}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setIsRoomsDropdownOpen(!isRoomsDropdownOpen)
                        }
                        onMouseEnter={() => setIsRoomsDropdownOpen(true)}
                        className="relative px-4 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 group flex items-center gap-1"
                      >
                        <span
                          className={`relative z-10 ${
                            activeLink === link.name
                              ? "text-amber-400"
                              : "text-white group-hover:text-amber-400"
                          }`}
                        >
                          {link.name}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isRoomsDropdownOpen ? "rotate-180" : ""
                          } ${
                            activeLink === link.name
                              ? "text-amber-400"
                              : "text-white group-hover:text-amber-400"
                          }`}
                        />
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ${
                            activeLink === link.name
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        onMouseEnter={() => setIsRoomsDropdownOpen(true)}
                        onMouseLeave={() => setIsRoomsDropdownOpen(false)}
                        className={`absolute top-full left-0 mt-2 w-64 bg-slate-900/98 backdrop-blur-md shadow-2xl shadow-black/40 border border-amber-500/20 transition-all duration-300 origin-top ${
                          isRoomsDropdownOpen
                            ? "opacity-100 scale-y-100 pointer-events-auto"
                            : "opacity-0 scale-y-95 pointer-events-none"
                        }`}
                      >
                        <div className="py-2">
                          {link.subLinks.map((subLink, index) => (
                            <a
                              key={subLink.name}
                              href={subLink.href}
                              onClick={() => {
                                setActiveLink(link.name);
                                setIsRoomsDropdownOpen(false);
                              }}
                              className="block px-6 py-3 text-sm text-white/90 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300 border-b border-white/5 last:border-b-0"
                              style={{
                                transitionDelay: isRoomsDropdownOpen
                                  ? `${index * 30}ms`
                                  : "0ms",
                              }}
                            >
                              {subLink.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setActiveLink(link.name)}
                      className="relative px-4 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 group"
                    >
                      <span
                        className={`relative z-10 ${
                          activeLink === link.name
                            ? "text-amber-400"
                            : "text-white group-hover:text-amber-400"
                        }`}
                      >
                        {link.name}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ${
                          activeLink === link.name
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+2348135083826"
                className="p-2 text-white/70 hover:text-amber-400 transition-colors duration-300"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#book"
                className="relative px-6 py-2.5 bg-amber-500 text-slate-900 font-semibold text-sm uppercase tracking-widest overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Book Now
                </span>
                <div className="absolute inset-0 bg-slate-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="tel:+2348135083826"
                className="p-2 text-white hover:text-amber-400 transition-colors duration-300"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Elegant scroll border */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full sm:w-96 h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Spacer */}
          <div className="h-20" />

          {/* Navigation Links */}
          <div className="px-6 py-8">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsMobileRoomsOpen(!isMobileRoomsOpen)}
                      className={`flex items-center justify-between w-full py-4 text-2xl font-light tracking-wider uppercase border-b border-white/10 transition-all duration-300 hover:text-amber-400 ${
                        activeLink === link.name
                          ? "text-amber-400 font-medium"
                          : "text-white"
                      }`}
                      style={{
                        transitionDelay: isMobileMenuOpen
                          ? `${index * 50}ms`
                          : "0ms",
                        opacity: isMobileMenuOpen ? 1 : 0,
                        transform: isMobileMenuOpen
                          ? "translateX(0)"
                          : "translateX(20px)",
                      }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isMobileRoomsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileRoomsOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => {
                            setActiveLink(link.name);
                            setIsMobileMenuOpen(false);
                            setIsMobileRoomsOpen(false);
                          }}
                          className="block py-3 pl-6 text-lg text-white/80 hover:text-amber-400 transition-colors duration-300"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block py-4 text-2xl font-light tracking-wider uppercase border-b border-white/10 transition-all duration-300 hover:text-amber-400 hover:translate-x-2 ${
                      activeLink === link.name
                        ? "text-amber-400 font-medium"
                        : "text-white"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                      opacity: isMobileMenuOpen ? 1 : 0,
                      transform: isMobileMenuOpen
                        ? "translateX(0)"
                        : "translateX(20px)",
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="px-6 py-6 space-y-4 border-t border-white/10">
            <div className="flex items-start space-x-3 text-white/80 hover:text-amber-400 transition-colors duration-300">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <a href="tel:+2348135083826" className="text-sm">
                +234 813 508 3826
              </a>
            </div>
            <div className="flex items-start space-x-3 text-white/80 hover:text-amber-400 transition-colors duration-300">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <a href="mailto:reservations@dephantom.com" className="text-sm">
                reservations@dephantom.com
              </a>
            </div>
            <div className="flex items-start space-x-3 text-white/80">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                Plot 5, Block 139A, Nike Art Gallery Road
                <br />
                Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="px-6 pb-8">
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-5 bg-amber-500 text-slate-900 font-semibold text-sm uppercase tracking-widest text-center transition-all duration-300 hover:bg-amber-400 hover:shadow-2xl hover:shadow-amber-500/50 active:scale-95"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
