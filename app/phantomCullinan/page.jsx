"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  Bed,
  Bath,
  Wind,
  Wifi,
  Tv,
  Coffee,
  Phone,
  Maximize,
  Home,
  Sparkles,
} from "lucide-react";

// Luxury Loader Component
const LuxuryLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Diamond Icon */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 animate-spin-slow">
            <Sparkles className="w-32 h-32 text-amber-500" />
          </div>
          <div className="absolute inset-0 animate-pulse">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg transform rotate-45 opacity-20" />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-light text-white mb-4 tracking-widest animate-pulse">
          PHANTOM CULLINAN LUXURY
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <div
            className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
        <p className="text-gray-400 mt-4 text-sm tracking-wider">
          Loading luxury experience...
        </p>
      </div>
    </div>
  );
};

// Home Button Component
const HomeButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => (window.location.href = "/")}
      className={`fixed top-8 left-8 z-40 flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
        isScrolled
          ? "bg-white text-gray-900 shadow-2xl"
          : "bg-white/10 backdrop-blur-md text-white border border-white/20"
      } hover:scale-105 hover:shadow-amber-500/20`}
      aria-label="Return to home page"
    >
      <Home className="w-5 h-5" />
      <span className="font-medium tracking-wide">Home</span>
    </button>
  );
};

// Hero Component
const Hero = ({ roomName, tagline, onBookNow }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80"
        alt="Phantom Cullinan Luxury Suite"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6 text-center">
          {roomName}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-center max-w-3xl tracking-wide text-gray-200">
          {tagline}
        </p>
        <button
          onClick={onBookNow}
          className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-12 py-4 rounded-full text-lg font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

// Room Overview Component
const RoomOverview = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
          Experience Unparalleled Luxury
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              The{" "}
              <span className="font-semibold text-gray-900">
                Phantom Cullinan Luxury
              </span>{" "}
              represents the pinnacle of modern luxury accommodation. Named
              after the legendary diamond, this suite embodies rare elegance and
              timeless sophistication.
            </p>
            <p>
              Indulge in a spacious sanctuary featuring a{" "}
              <span className="font-semibold">
                premium bathroom and private toilet
              </span>
              , designed with Italian marble and designer fixtures. Step onto
              your{" "}
              <span className="font-semibold">exclusive private balcony</span>{" "}
              to witness breathtaking views that complement your elevated
              experience.
            </p>
            <p>
              Every detail has been meticulously curated to provide an
              atmosphere of refined comfort, where contemporary design meets
              classical luxury. The Phantom Cullinan Luxury is not just a
              room—it's a destination.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
              alt="Phantom Cullinan Luxury Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Amenities Component
const Amenities = () => {
  const amenities = [
    {
      icon: Bed,
      title: "King-Size Bed",
      description: "Premium orthopedic mattress with Egyptian cotton linens",
    },
    {
      icon: Bath,
      title: "Spacious Bathroom",
      description: "Italian marble with rainfall shower and soaking tub",
    },
    {
      icon: Maximize,
      title: "Private Balcony",
      description: "Exclusive outdoor space with panoramic views",
    },
    {
      icon: Tv,
      title: "Smart TV",
      description: '65" 4K display with streaming services',
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary fiber-optic internet access",
    },
    {
      icon: Wind,
      title: "Climate Control",
      description: "Intelligent air conditioning system",
    },
    {
      icon: Coffee,
      title: "Mini Bar",
      description: "Premium beverages and gourmet snacks",
    },
    {
      icon: Phone,
      title: "24/7 Concierge",
      description: "Personalized room service at your fingertips",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center tracking-wide">
          Premium Amenities
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-amber-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/20"
              >
                <Icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Image Gallery Component
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      alt: "Phantom Cullinan Luxury Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      alt: "Luxury Bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?w=800&q=80",
      alt: "Private Balcony View",
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
      alt: "Suite Living Area",
    },
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      alt: "Premium Amenities",
    },
    {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      alt: "Evening Ambiance",
    },
  ];

  return (
    <>
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-light">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

// Booking CTA Component
const BookingCTA = ({ onBookNow }) => {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
          Reserve Your Sanctuary
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          Embrace the extraordinary. Your Phantom Cullinan Luxury experience
          awaits.
        </p>
        <button
          onClick={onBookNow}
          className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-16 py-5 rounded-full text-xl font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
        >
          Reserve Your Stay
        </button>
        <p className="mt-8 text-gray-400 text-sm">
          Best rate guarantee · Flexible cancellation · Instant confirmation
        </p>
      </div>
    </section>
  );
};

// Main Page Component
const PhantomCullinanLuxuryPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Add custom animation for slow spin - MOVED INSIDE useEffect
    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin-slow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .animate-spin-slow {
        animation: spin-slow 3s linear infinite;
      }
    `;

    // Check if style already exists to avoid duplicates
    if (!document.querySelector("style[data-phantom-animations]")) {
      style.setAttribute("data-phantom-animations", "true");
      document.head.appendChild(style);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    window.location.href = "tel:+2348135083826";
  };

  if (isLoading) {
    return <LuxuryLoader />;
  }

  return (
    <main className="min-h-screen bg-white">
      <HomeButton />
      <Hero
        roomName="Phantom Cullinan Luxury"
        tagline="Where Royal Comfort Meets Modern Luxury"
        onBookNow={handleBookNow}
      />
      <RoomOverview />
      <Amenities />
      <ImageGallery />
      <BookingCTA onBookNow={handleBookNow} />
    </main>
  );
};

export default PhantomCullinanLuxuryPage;
