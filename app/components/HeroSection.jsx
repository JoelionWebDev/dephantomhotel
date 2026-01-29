"use client";
import { useState, useEffect } from "react";
import { Calendar, Users, MapPin, Award } from "lucide-react";

export default function LuxuryHotelHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Placeholder luxury hotel images
  const heroImages = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Image carousel
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image Carousel with Smooth Transitions */}
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            activeImage === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="De Phantom Continental Hotel"
            className="h-full w-full object-cover scale-105"
          />
        </div>
      ))}

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/40" />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Main Hero Content */}
        <div className="flex flex-1 items-center justify-center px-4 pt-20 pb-8 sm:pb-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl w-full">
            <div className="text-center">
              {/* Luxury Badge */}
              <div
                className={`mb-6 inline-flex items-center gap-2 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                <Award className="h-5 w-5 text-amber-400" />
                <span className="text-sm tracking-widest text-amber-400 uppercase font-light">
                  De Phantom Hotel Lekki
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`mb-6 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ikate
                <br />
                <span className="text-amber-400">Branch</span>
              </h1>

              {/* Subheadline */}
              {/* <p
                className={`mx-auto mb-8 sm:mb-10 max-w-3xl text-lg sm:text-xl text-slate-200 font-light leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                De Phantom Continental Hotel Ikate along Nike Art Gallery Road,
                Lekki Phase 1.
              </p> */}

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <button className="group relative px-8 py-4 bg-amber-500 text-slate-900 font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-amber-400 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Stay
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Location Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-12 sm:mb-40 transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-sm text-slate-200">
                  Plot 5, Block 139A, Nike Art Gallery Road, Lekki Phase 1,
                  Lagos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Booking Teaser Card - Transparent with Golden Border */}
        <div
          className={`relative sm:absolute bottom-0 sm:bottom-4 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full max-w-5xl px-4 mb-20 sm:mb-0 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* 
            Transparent card with golden border
            - bg-transparent for full transparency
            - backdrop-blur-xl for glass effect
            - border-amber-500/60 for golden border with slight transparency
            - shadow-2xl and shadow-amber-500/20 for golden glow effect
          */}

          <div className="bg-transparent backdrop-blur-xl rounded-2xl shadow-2xl shadow-amber-500/20 border-2 border-amber-500/60 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
              {/* Check-in */}
              {/* <div className="group">
                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">
                  Check-in
                </label>
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-md cursor-pointer">
                  <Calendar className="h-5 w-5 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  <input
                    type="date"
                    className="flex-1 bg-transparent text-white text-sm outline-none cursor-pointer placeholder:text-slate-400"
                    placeholder="Select date"
                  />
                </div>
              </div> */}

              {/* Check-out */}
              {/* <div className="group">
                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">
                  Check-out
                </label>
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-md cursor-pointer">
                  <Calendar className="h-5 w-5 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  <input
                    type="date"
                    className="flex-1 bg-transparent text-white text-sm outline-none cursor-pointer placeholder:text-slate-400"
                    placeholder="Select date"
                  />
                </div>
              </div> */}

              {/* Guests */}
              {/* <div className="group">
                <label className="block text-xs font-medium text-white uppercase tracking-wider mb-2">
                  Guests
                </label>
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-md cursor-pointer">
                  <Users className="h-5 w-5 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  <select className="flex-1 bg-transparent text-white text-sm outline-none cursor-pointer">
                    <option className="bg-slate-900">1 Guest</option>
                    <option className="bg-slate-900">2 Guests</option>
                    <option className="bg-slate-900">3 Guests</option>
                    <option className="bg-slate-900">4+ Guests</option>
                  </select>
                </div>
              </div> */}

              {/* Search Button */}
              {/* <button className="w-full px-6 py-4 bg-amber-500 text-slate-900 font-medium rounded-lg transition-all duration-300 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105 active:scale-95">
                Check Availability
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Adjusted position for mobile */}
      <div className="hidden sm:block absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeImage === idx
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`View image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
