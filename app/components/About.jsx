"use client";
import { useState, useEffect, useRef } from "react";
import { Award, MapPin, Star } from "lucide-react";

export default function LuxuryAboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
            <Award className="h-5 w-5 text-amber-500" />
            <span className="text-sm tracking-[0.3em] text-slate-300 uppercase font-light">
              About Us
            </span>
            <Award className="h-5 w-5 text-amber-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                De Phantom Continental
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-200">
                Hotel Ikate
              </span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500 to-transparent" />
              <Star className="h-4 w-4 text-amber-500" />
              <div className="h-px w-16 bg-amber-500/30" />
            </div>

            {/* Description Paragraph */}
            <p className="text-lg leading-relaxed text-slate-300 font-light">
              Situated in the heart of Lekki Phase 1, Lagos, De Phantom
              Continental Hotel Ikate offers refined comfort, contemporary
              style, and warm hospitality for both business and leisure
              travelers. Experience premium accommodations where modern elegance
              meets traditional Nigerian warmth.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Prime Location
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Lekki Phase 1, Lagos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Luxury Comfort
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Premium Amenities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Exceptional Service
                  </p>
                  <p className="text-xs text-slate-400 mt-1">24/7 Guest Care</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Modern Design
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Contemporary Elegance
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-amber-500 text-slate-900 font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Learn More
                </span>
              </button>

              <button className="px-8 py-4 bg-transparent text-white font-medium text-sm uppercase tracking-wider border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105">
                View Gallery
              </button>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-2 pt-4">
              <MapPin className="h-5 w-5 text-amber-500" />
              <p className="text-sm text-slate-300 tracking-wide">
                Plot 5, Block 139A, Nike Art Gallery Road, Lekki Phase 1
              </p>
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Main Large Image */}
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden shadow-2xl shadow-amber-500/10">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="De Phantom Continental Hotel Ikate Lobby"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-sm p-6 shadow-xl border border-amber-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                      Luxury Hotel
                    </p>
                    <p className="text-lg font-medium text-white">
                      De Phantom Continental
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Small Images Grid - Bottom Right Accent */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 grid grid-cols-2 gap-4 w-64 lg:w-80">
              <div className="h-32 lg:h-40 overflow-hidden shadow-xl shadow-amber-500/10 border border-amber-500/20">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
                  alt="Hotel Room"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="h-32 lg:h-40 overflow-hidden shadow-xl shadow-amber-500/10 border border-amber-500/20">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
                  alt="Hotel Dining"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-amber-400/30 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400/10 -z-10" />
          </div>
        </div>

        {/* Statistics Bar */}
        <div
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center p-6 bg-slate-800 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10 transition-shadow duration-300 border border-slate-700">
            <p
              className="text-4xl font-light text-amber-500 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              50+
            </p>
            <p className="text-sm text-slate-300 uppercase tracking-widest">
              Luxury Rooms
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10 transition-shadow duration-300 border border-slate-700">
            <p
              className="text-4xl font-light text-amber-500 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              24/7
            </p>
            <p className="text-sm text-slate-300 uppercase tracking-widest">
              Guest Service
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10 transition-shadow duration-300 border border-slate-700">
            <p
              className="text-4xl font-light text-amber-500 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5★
            </p>
            <p className="text-sm text-slate-300 uppercase tracking-widest">
              Rated Hotel
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10 transition-shadow duration-300 border border-slate-700">
            <p
              className="text-4xl font-light text-amber-500 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              100%
            </p>
            <p className="text-sm text-slate-300 uppercase tracking-widest">
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
