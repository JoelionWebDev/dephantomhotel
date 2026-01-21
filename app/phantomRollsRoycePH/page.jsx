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
  Crown,
  Building2,
  Sofa,
  Wine,
  Utensils,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Luxury Loader Component
const LuxuryLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 animate-spin-slow">
            <Crown className="w-32 h-32 text-amber-500" />
          </div>
          <div className="absolute inset-0 animate-pulse">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg transform rotate-45 opacity-20" />
          </div>
        </div>
        <h2 className="text-3xl font-light text-white mb-4 tracking-widest animate-pulse">
          PHANTOM ROLLS ROYCE
        </h2>
        <p className="text-xl font-light text-amber-500 mb-4 tracking-wider">
          PENTHOUSE
        </p>
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
          Loading pinnacle of luxury...
        </p>
      </div>
    </div>
  );
};

// Home Button Component
// const HomeButton = ({ onHomeClick }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const router = useRouter();

//   return (
//     <button
//       onClick={() => router.push("/")}
//       className={`fixed top-8 left-8 z-40 flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-white text-gray-900 shadow-2xl"
//           : "bg-white/10 backdrop-blur-md text-white border border-white/20"
//       } hover:scale-105 hover:shadow-amber-500/20`}
//       aria-label="Return to home page"
//     >
//       <Home className="w-5 h-5" />
//       <span className="font-medium tracking-wide">Home</span>
//     </button>
//   );
// };

// Hero Component
const Hero = ({ roomName, subtitle, tagline, onBookNow }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt="Phantom Rolls Royce Penthouse"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <Crown className="w-20 h-20 text-amber-500 mb-6 animate-pulse" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4 text-center">
          {roomName}
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-center text-amber-400 tracking-widest">
          {subtitle}
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-center max-w-4xl tracking-wide text-gray-200">
          {tagline}
        </p>
        <button
          onClick={onBookNow}
          className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-14 py-5 rounded-full text-lg font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
        >
          Reserve Penthouse
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
          The Pinnacle of Opulence
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              The{" "}
              <span className="font-semibold text-gray-900">
                Phantom Rolls Royce Penthouse
              </span>{" "}
              stands as the ultimate expression of luxury living. Named after
              the world's most prestigious automotive masterpiece, this
              exclusive penthouse suite redefines elegance at the highest level.
            </p>
            <p>
              Spanning an entire top floor, this architectural marvel features a{" "}
              <span className="font-semibold">spacious rooftop sit-out</span>{" "}
              that offers breathtaking 360-degree panoramic views. Your private
              sky sanctuary becomes the perfect setting for intimate gatherings,
              sunset cocktails, or serene morning meditation.
            </p>
            <p>
              Immerse yourself in unparalleled luxury with expansive living
              areas, bespoke furnishings, and state-of-the-art amenities. Every
              element has been crafted to exceed the expectations of the most
              discerning guests. The Phantom Rolls Royce Penthouse isn't just
              accommodation—it's a lifestyle statement.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80"
              alt="Phantom Rolls Royce Penthouse Interior"
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
      icon: Crown,
      title: "Presidential Suite",
      description: "Multi-room penthouse with separate living and dining areas",
    },
    {
      icon: Building2,
      title: "Rooftop Sit-Out",
      description: "Expansive private terrace with 360° panoramic city views",
    },
    {
      icon: Bed,
      title: "Master Bedroom",
      description: "California King bed with premium Frette linens",
    },
    {
      icon: Bath,
      title: "Luxury Bathroom",
      description: "Marble spa bathroom with jacuzzi and rain shower",
    },
    {
      icon: Sofa,
      title: "Living Room",
      description: "Designer furniture and curated art collection",
    },
    {
      icon: Tv,
      title: "Entertainment System",
      description: '85" 8K Smart TV with premium sound system',
    },
    {
      icon: Wifi,
      title: "Fiber WiFi",
      description: "Ultra-high-speed dedicated internet connection",
    },
    {
      icon: Wind,
      title: "Smart Climate",
      description: "Zone-controlled heating and cooling system",
    },
    {
      icon: Wine,
      title: "Wine Cellar",
      description: "Curated selection of premium wines and spirits",
    },
    {
      icon: Utensils,
      title: "Private Chef",
      description: "On-demand gourmet dining prepared in-suite",
    },
    {
      icon: Coffee,
      title: "Premium Bar",
      description: "Fully stocked with top-shelf beverages",
    },
    {
      icon: Phone,
      title: "Butler Service",
      description: "Dedicated 24/7 personal butler and concierge",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center tracking-wide">
          Penthouse Amenities
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
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      alt: "Penthouse Living Room",
    },
    {
      src: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80",
      alt: "Rooftop Sit-Out",
    },
    {
      src: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
      alt: "Master Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      alt: "Luxury Bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
      alt: "Dining Area",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      alt: "Panoramic City Views",
    },
  ];

  return (
    <>
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
            Penthouse Gallery
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
        <Crown className="w-16 h-16 text-amber-500 mx-auto mb-8" />
        <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
          Claim Your Crown
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          Ascend to unprecedented luxury. The Phantom Rolls Royce Penthouse
          awaits your arrival.
        </p>
        <button
          onClick={onBookNow}
          className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-16 py-5 rounded-full text-xl font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
        >
          Reserve Penthouse
        </button>
        <p className="mt-8 text-gray-400 text-sm">
          VIP treatment guaranteed · Complimentary airport transfer · Private
          check-in
        </p>
      </div>
    </section>
  );
};

// Main Page Component
const PhantomRollsRoycePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    alert(
      "Booking system integration would redirect to penthouse reservation page"
    );
  };

  if (isLoading) {
    return <LuxuryLoader />;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* <HomeButton /> */}
      <Hero
        roomName="Phantom Rolls Royce"
        subtitle="PENTHOUSE"
        tagline="The Ultimate Expression of Luxury Living"
        onBookNow={handleBookNow}
      />
      <RoomOverview />
      <Amenities />
      <ImageGallery />
      <BookingCTA onBookNow={handleBookNow} />
    </main>
  );
};

export default PhantomRollsRoycePage;

const style = document.createElement("style");
style.textContent = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
`;
document.head.appendChild(style);
