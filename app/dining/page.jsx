"use client";
import { useState, useEffect } from "react";
import {
  Home,
  Utensils,
  Coffee,
  Wine,
  Clock,
  Phone,
  ChefHat,
  Sparkles,
} from "lucide-react";

// Luxury Loader Component
const LuxuryLoader = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-8">
        <div className="absolute inset-0 animate-pulse">
          <Sparkles className="w-32 h-32 text-amber-500" />
        </div>
      </div>
      <h2 className="text-3xl font-light text-white mb-4 tracking-widest animate-pulse">
        DE PHANTOM CONTINENTAL
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" />
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
        Loading dining experience...
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

// Hero Component
const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
    <img
      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      alt="Restaurant Dining"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
      <div className="flex items-center justify-center mb-6">
        <ChefHat className="w-16 h-16 text-amber-500 animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6 text-center">
        Dining
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-light text-center max-w-3xl tracking-wide text-gray-200">
        Culinary Excellence in Every Bite
      </p>
    </div>
  </section>
);

// Dining Options Component
const DiningOptions = () => {
  const options = [
    {
      icon: Utensils,
      title: "Main Restaurant",
      description:
        "Experience fine dining with our expertly crafted international and local cuisines in an elegant setting.",
      hours: "6:00 AM - 11:00 PM",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
      icon: Coffee,
      title: "Café & Lounge",
      description:
        "Relax with premium coffee, pastries, and light refreshments in our comfortable lounge area.",
      hours: "7:00 AM - 10:00 PM",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    },
    {
      icon: Wine,
      title: "Bar",
      description:
        "Enjoy expertly crafted cocktails, premium spirits, and an extensive wine selection.",
      hours: "5:00 PM - 12:00 AM",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
          Our Dining Venues
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-16" />

        <div className="space-y-12">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1 relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-500 p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-light text-gray-900">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {option.description}
                  </p>
                  <div className="flex items-center space-x-2 text-amber-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{option.hours}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Internationally trained culinary team",
    },
    {
      icon: Utensils,
      title: "Fresh Ingredients",
      description: "Locally sourced premium quality",
    },
    {
      icon: Wine,
      title: "Fine Selection",
      description: "Curated wine and beverage menu",
    },
    {
      icon: Sparkles,
      title: "Elegant Ambiance",
      description: "Sophisticated dining atmosphere",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-wide">
          Why Dine With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-amber-600 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Room Service Section
const RoomService = () => (
  <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
        24/7 Room Service
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8" />
      <p className="text-gray-600 text-lg mb-12 leading-relaxed">
        Enjoy our full menu delivered directly to your room at any time. From
        early breakfast to late-night cravings, we're here to serve you around
        the clock with the same quality and care you'd experience in our
        restaurant.
      </p>
      <button
        onClick={() => (window.location.href = "tel:+2348135083826")}
        className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto"
      >
        <Phone className="w-5 h-5" />
        <span>Order Room Service</span>
      </button>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
        Reserve Your Table
      </h2>
      <p className="text-xl text-gray-300 mb-10 font-light">
        Experience exceptional dining at De Phantom Continental Hotel
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => (window.location.href = "tel:+2348135083826")}
          className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
        >
          Make Reservation
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-105"
        >
          View Rooms
        </button>
      </div>
    </div>
  </section>
);

// Main Component
export default function DiningPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LuxuryLoader />;

  return (
    <main className="min-h-screen bg-white">
      {/* <HomeButton /> */}
      <Hero />
      <DiningOptions />
      <Features />
      <RoomService />
      <CTASection />
    </main>
  );
}
