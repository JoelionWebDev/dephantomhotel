"use client";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

/**
 * Luxury Hotel Footer Component
 * De Phantom Continental Hotel Ikate - Lekki, Lagos
 *
 * Features:
 * - Fully responsive (mobile-first design)
 * - Newsletter subscription
 * - Social media integration
 * - Quick navigation links
 * - Contact information
 * - Legal links
 * - Elegant dark theme with gold accents
 */

export default function HotelFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Navigation links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms & Suites", href: "#rooms" },
    { name: "Restaurant", href: "#restaurant" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
    { name: "Book Now", href: "#book" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/dephantomhotel",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/dephantomhotel",
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/dephantomhotel",
      color: "hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/dephantomhotel",
      color: "hover:text-blue-600",
    },
  ];

  // Handle newsletter subscription
  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Subscribed:", email);
      setEmail("");
      setIsSubscribing(false);
      alert("Thank you for subscribing to our newsletter!");
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-zinc-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Hotel Info & Description */}
          <div className="space-y-6">
            {/* Logo / Hotel Name */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2">
                De Phantom
              </h2>
              <p className="text-sm text-amber-500 tracking-widest uppercase">
                Continental Hotel Ikate
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-400">
              Experience world-class luxury and exceptional hospitality in the
              heart of Lekki. Where elegance meets comfort.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center 
                      transition-all duration-300 ${social.color} hover:bg-zinc-800 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors duration-300 
                      inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Plot 5, Block 139A,
                  <br />
                  Nike Art Gallery Road,
                  <br />
                  Ikate, Lekki Phase 1,
                  <br />
                  Lagos, Nigeria
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+2348135083826"
                  className="text-sm text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  +234 813 508 3826
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:reservations@dephantom.com"
                  className="text-sm text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  reservations@dephantom.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>

            {/* Newsletter Input */}
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded 
                    text-sm text-white placeholder-gray-500 
                    focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500
                    transition-all duration-300"
                />
              </div>

              <button
                onClick={handleSubscribe}
                disabled={isSubscribing}
                className="w-full px-6 py-3 bg-amber-500 text-black font-semibold text-sm 
                  rounded tracking-wider uppercase transition-all duration-300
                  hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center space-x-2"
              >
                {isSubscribing ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Optional: Trust badge */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <p className="text-xs text-gray-500">
                🔒 Your privacy is important to us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal & Copyright */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} De Phantom Continental Hotel Ikate. All rights
              reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a
                href="#terms"
                className="text-sm text-gray-500 hover:text-amber-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#privacy"
                className="text-sm text-gray-500 hover:text-amber-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
    </footer>
  );
}
