"use client";
import { useState, useEffect } from "react";
import {
  X,
  Bed,
  Wind,
  Wifi,
  Tv,
  Coffee,
  Phone,
  Home,
  Car,
  Sparkles,
} from "lucide-react";

const LuxuryLoader = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-8">
        <div className="absolute inset-0">
          <Car className="w-32 h-32 text-purple-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-3xl font-light text-white mb-4 tracking-widest animate-pulse">
        PHANTOM MINI ROLLS ROYCE
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
        <div
          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
      <p className="text-gray-400 mt-4 text-sm tracking-wider">
        Loading your premium experience...
      </p>
    </div>
  </div>
);

// Home Button Component
// const HomeButton = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <button
//       onClick={() => (window.location.href = "/")}
//       className={`fixed top-8 left-8 z-40 flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-white text-gray-900 shadow-2xl"
//           : "bg-white/10 backdrop-blur-md text-white border border-white/20"
//       } hover:scale-105`}
//     >
//       <Home className="w-5 h-5" />
//       <span className="font-medium tracking-wide">Home</span>
//     </button>
//   );
// };

const Hero = ({ roomName, tagline, onBookNow }) => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-black/50 to-indigo-900/70 z-10" />
    <img
      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
      alt="Phantom Mini Rolls Royce"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
      <div className="flex items-center justify-center mb-4">
        <Car className="w-16 h-16 text-purple-400 mr-4" />
        <Sparkles className="w-12 h-12 text-purple-300" />
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-center">
        {roomName}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 text-center max-w-3xl tracking-wide text-gray-200">
        {tagline}
      </p>
      <button
        onClick={onBookNow}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-4 rounded-full text-lg font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
      >
        Book Now
      </button>
    </div>
  </section>
);

const RoomOverview = () => (
  <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
        Compact Luxury, Maximum Comfort
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-12" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            The{" "}
            <span className="font-semibold text-gray-900">
              Phantom Mini Rolls Royce
            </span>{" "}
            room delivers premium comfort in a thoughtfully designed space.
            Perfect for solo travelers and couples seeking quality accommodation
            without compromise.
          </p>
          <p>
            Featuring a{" "}
            <span className="font-semibold">comfortable queen-size bed</span>{" "}
            with high-quality linens and a{" "}
            <span className="font-semibold">well-appointed bathroom</span> with
            modern fixtures. Every detail has been optimized to maximize comfort
            and functionality.
          </p>
          <p>
            Experience the perfect balance of efficiency and elegance. The
            Phantom Mini Rolls Royce proves that exceptional hospitality doesn't
            require excess space—just exceptional attention to detail.
          </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80"
            alt="Phantom Mini Rolls Royce Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const Amenities = () => {
  const amenities = [
    {
      icon: Bed,
      title: "Queen-Size Bed",
      description: "Premium comfort mattress",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary internet access",
    },
    {
      icon: Tv,
      title: "Smart TV",
      description: '43" Full HD with streaming',
    },
    {
      icon: Wind,
      title: "Climate Control",
      description: "Personal AC system",
    },
    {
      icon: Coffee,
      title: "Refreshments",
      description: "Tea & coffee facilities",
    },
    { icon: Phone, title: "Room Service", description: "24/7 availability" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center tracking-wide">
          Premium Amenities
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
                <p className="text-gray-300 text-sm">{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      alt: "Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      alt: "Queen Bed",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      alt: "Bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      alt: "Work Space",
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      alt: "Room View",
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
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
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
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
            className="absolute top-8 right-8 text-white hover:text-purple-400 transition-colors"
            onClick={() => setSelectedImage(null)}
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

const BookingCTA = ({ onBookNow }) => (
  <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl" />
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
        Reserve Your Premium Stay
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
        Experience comfort and quality in the Phantom Mini Rolls Royce room.
      </p>
      <button
        onClick={onBookNow}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-16 py-5 rounded-full text-xl font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
      >
        Reserve Your Stay
      </button>
      <p className="mt-8 text-gray-400 text-sm">
        Best rate guarantee · Flexible cancellation · Instant confirmation
      </p>
    </div>
  </section>
);

export default function PhantomMiniRollsRoycePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LuxuryLoader />;

  return (
    <main className="min-h-screen bg-white">
      {/* <HomeButton /> */}
      <Hero
        roomName="Phantom Mini Rolls Royce"
        tagline="Premium Comfort in Perfect Proportion"
        onBookNow={() => (window.location.href = "tel:+2348135083826")}
      />
      <RoomOverview />
      <Amenities />
      <ImageGallery />
      <BookingCTA
        onBookNow={() => (window.location.href = "tel:+2348135083826")}
      />
    </main>
  );
}
