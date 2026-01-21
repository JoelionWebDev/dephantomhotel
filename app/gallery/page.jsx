"use client";
import { useState, useEffect } from "react";
import {
  Home,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Grid3x3,
  Camera,
  ZoomIn,
  Download,
  Share2,
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
        Loading gallery...
      </p>
    </div>
  </div>
);

// Home Button Component
const HomeButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
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
      } hover:scale-105`}
    >
      <Home className="w-5 h-5" />
      <span className="font-medium tracking-wide">Home</span>
    </button>
  );
};

// Hero Component
const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
    <img
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      alt="De Phantom Continental Hotel"
      className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
    />
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
      <div className="flex items-center justify-center mb-6">
        <Camera className="w-16 h-16 text-amber-500 animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6 text-center">
        Gallery
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-center max-w-4xl tracking-wide text-gray-200">
        A Visual Journey Through Luxury & Elegance
      </p>
      <div className="flex items-center space-x-4 text-amber-500">
        <div className="flex items-center space-x-2">
          <Grid3x3 className="w-5 h-5" />
          <span className="text-lg tracking-wide">150+ Photos</span>
        </div>
        <div className="w-1 h-1 bg-amber-500 rounded-full" />
        <span className="text-lg tracking-wide">8 Categories</span>
      </div>
    </div>
  </section>
);

// Category Filter Component
const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => onSelectCategory(category.id)}
        className={`px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 ${
          activeCategory === category.id
            ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg scale-105"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
        }`}
      >
        {category.name}
      </button>
    ))}
  </div>
);

// Gallery Grid Component
const GalleryGrid = ({ images, onImageClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {images.map((image, index) => (
      <div
        key={index}
        onClick={() => onImageClick(index)}
        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-medium text-lg mb-1">{image.title}</p>
            <p className="text-gray-300 text-sm">{image.category}</p>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Lightbox Component
const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-light mb-1">
              {currentImage.title}
            </h3>
            <p className="text-gray-400 text-sm">{currentImage.category}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => alert("Share functionality")}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => alert("Download functionality")}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Download className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={onClose}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-20">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full">
        <p className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "150+", label: "Photos" },
    { number: "8", label: "Categories" },
    { number: "50+", label: "Rooms Captured" },
    { number: "25+", label: "Facilities" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-amber-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-lg tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
        Ready to Experience This?
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
        Book your stay and create your own memories at De Phantom Continental
        Hotel
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-12 py-5 rounded-full text-xl font-medium tracking-wider transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105"
        >
          Book Now
        </button>
        <button
          onClick={() => (window.location.href = "tel:+2348135083826")}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-12 py-5 rounded-full text-xl font-medium tracking-wider transition-all duration-300 transform hover:scale-105"
        >
          Contact Us
        </button>
      </div>
      <p className="mt-8 text-gray-400 text-sm">
        Best rate guarantee · Flexible cancellation · Instant confirmation
      </p>
    </div>
  </section>
);

// Main Gallery Page Component
export default function GalleryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "rooms", name: "Rooms & Suites" },
    { id: "dining", name: "Dining" },
    { id: "facilities", name: "Facilities" },
    { id: "exterior", name: "Exterior" },
    { id: "events", name: "Events" },
    { id: "spa", name: "Spa & Wellness" },
    { id: "pool", name: "Pool Area" },
  ];

  const allImages = [
    // Rooms & Suites
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      alt: "Luxury Suite",
      title: "Phantom Royal Suite",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      alt: "King Bed Room",
      title: "Premium King Bedroom",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      alt: "Luxury Bathroom",
      title: "Marble Bathroom",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      alt: "Suite Living Area",
      title: "Suite Living Space",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      alt: "Work Desk",
      title: "Executive Workspace",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      alt: "Evening View",
      title: "Room Evening Ambiance",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      alt: "Deluxe Bedroom",
      title: "Deluxe Room View",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1595516900775-f2db0564e5c0?w=800&q=80",
      alt: "Room Interior",
      title: "Modern Room Design",
      category: "Rooms & Suites",
      categoryId: "rooms",
    },

    // Dining
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      alt: "Restaurant Interior",
      title: "Main Restaurant",
      category: "Dining",
      categoryId: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      alt: "Restaurant Dining",
      title: "Fine Dining Experience",
      category: "Dining",
      categoryId: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      alt: "Bar Area",
      title: "Premium Bar Lounge",
      category: "Dining",
      categoryId: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",
      alt: "Gourmet Cuisine",
      title: "Chef's Special",
      category: "Dining",
      categoryId: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      alt: "Restaurant Seating",
      title: "Elegant Dining Space",
      category: "Dining",
      categoryId: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
      alt: "Breakfast Buffet",
      title: "Breakfast Selection",
      category: "Dining",
      categoryId: "dining",
    },

    // Facilities
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      alt: "Fitness Center",
      title: "Modern Gym Facility",
      category: "Facilities",
      categoryId: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      alt: "Business Center",
      title: "Business Workspace",
      category: "Facilities",
      categoryId: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f29da8c2b5?w=800&q=80",
      alt: "Event Space",
      title: "Grand Ballroom",
      category: "Facilities",
      categoryId: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      alt: "Meeting Room",
      title: "Conference Room",
      category: "Facilities",
      categoryId: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      alt: "Reception Area",
      title: "Lobby & Reception",
      category: "Facilities",
      categoryId: "facilities",
    },

    // Exterior
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      alt: "Hotel Exterior",
      title: "Main Building Facade",
      category: "Exterior",
      categoryId: "exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      alt: "Hotel Entrance",
      title: "Grand Entrance",
      category: "Exterior",
      categoryId: "exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      alt: "Night View",
      title: "Evening Illumination",
      category: "Exterior",
      categoryId: "exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      alt: "Hotel Gardens",
      title: "Landscaped Gardens",
      category: "Exterior",
      categoryId: "exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1569660072562-48a035e65c30?w=800&q=80",
      alt: "Building Architecture",
      title: "Modern Architecture",
      category: "Exterior",
      categoryId: "exterior",
    },

    // Events
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      alt: "Wedding Setup",
      title: "Wedding Celebration",
      category: "Events",
      categoryId: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      alt: "Conference Setup",
      title: "Corporate Event",
      category: "Events",
      categoryId: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      alt: "Banquet Hall",
      title: "Banquet Setup",
      category: "Events",
      categoryId: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      alt: "Celebration",
      title: "Special Occasion",
      category: "Events",
      categoryId: "events",
    },

    // Spa & Wellness
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      alt: "Spa Treatment",
      title: "Luxury Spa Room",
      category: "Spa & Wellness",
      categoryId: "spa",
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      alt: "Spa Relaxation",
      title: "Wellness Area",
      category: "Spa & Wellness",
      categoryId: "spa",
    },
    {
      src: "https://images.unsplash.com/photo-1552084162-ec07b3f162dc?w=800&q=80",
      alt: "Massage Room",
      title: "Treatment Room",
      category: "Spa & Wellness",
      categoryId: "spa",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
      alt: "Sauna",
      title: "Sauna & Steam Room",
      category: "Spa & Wellness",
      categoryId: "spa",
    },

    // Pool Area
    {
      src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      alt: "Swimming Pool",
      title: "Rooftop Pool",
      category: "Pool Area",
      categoryId: "pool",
    },
    {
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
      alt: "Pool Deck",
      title: "Pool Lounge Area",
      category: "Pool Area",
      categoryId: "pool",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      alt: "Pool View",
      title: "Poolside Relaxation",
      category: "Pool Area",
      categoryId: "pool",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      alt: "Pool Bar",
      title: "Poolside Bar",
      category: "Pool Area",
      categoryId: "pool",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? allImages
      : allImages.filter((img) => img.categoryId === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  if (isLoading) return <LuxuryLoader />;

  return (
    <main className="min-h-screen bg-white">
      <HomeButton />
      <Hero />

      {/* Gallery Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
            Explore Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-4" />
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            Browse through our curated collection showcasing the beauty and
            elegance of De Phantom Continental Hotel
          </p>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <GalleryGrid
            images={filteredImages}
            onImageClick={handleImageClick}
          />
        </div>
      </section>

      <StatsSection />
      <CTASection />

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      <style jsx global>{`
        @keyframes slow-zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
