"use client";
import { useState } from "react";
import {
  Star,
  Wifi,
  Coffee,
  Tv,
  Wind,
  Users,
  Bed,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";

// Phantom Affluent Room Images
const roomImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
    title: "Bedroom View",
    category: "main",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    title: "King Size Bed",
    category: "bedroom",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    title: "Bathroom",
    category: "bathroom",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    title: "Living Area",
    category: "living",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
    title: "Work Desk",
    category: "amenities",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
    title: "Bathroom Amenities",
    category: "bathroom",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
    title: "Night View",
    category: "bedroom",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
    title: "Room Overview",
    category: "main",
  },
];

// Room Features
const roomFeatures = [
  {
    icon: Wifi,
    name: "High-Speed WiFi",
    description: "Complimentary fiber optic internet",
  },
  { icon: Tv, name: "Smart TV", description: "55-inch 4K with streaming" },
  { icon: Wind, name: "Climate Control", description: "Individual AC system" },
  { icon: Coffee, name: "Mini Bar", description: "Premium beverages & snacks" },
  {
    icon: Bed,
    name: "King Size Bed",
    description: "Premium mattress & linens",
  },
  {
    icon: Users,
    name: "Up to 2 Guests",
    description: "Comfortable for couples",
  },
];

// Room Details
const roomDetails = {
  name: "Phantom Affluent",
  tagline: "Elegant Contemporary Design for Discerning Travelers",
  price: 45000,
  description:
    "Experience refined luxury in our Phantom Affluent room. Thoughtfully designed with contemporary elegance, this room offers the perfect blend of comfort and sophistication. Ideal for business travelers and couples seeking a premium stay with modern amenities and impeccable service.",
  size: "35 sqm",
  guests: 2,
  beds: "1 King Size Bed",
  view: "City View",
  amenities: [
    "Complimentary High-Speed WiFi",
    "55-inch Smart TV with Cable Channels",
    "Individual Climate Control",
    "Premium Mini Bar",
    "In-Room Safe",
    "Work Desk with Ergonomic Chair",
    "Luxury Bath Amenities",
    "Plush Bathrobes & Slippers",
    "Hair Dryer",
    "Iron & Ironing Board",
    "24/7 Room Service",
    "Daily Housekeeping",
  ],
};

// Image Gallery Component with Lightbox
function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-amber-400 transition-colors z-50"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-amber-400 transition-colors z-50"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl max-h-[90vh] px-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.title} ({currentIndex + 1} / {images.length})
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, name, description }) {
  return (
    <div className="group bg-slate-900/50 border border-white/10 rounded-lg p-6 hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-300">
      <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-amber-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  );
}

// Main Room Page Component
export default function PhantomAffluentPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roomImages[0].url}
            alt="Phantom Affluent"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            Premium Room
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wider">
            {roomDetails.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mb-8">
            {roomDetails.tagline}
          </p>
          <div className="flex flex-wrap gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5 text-amber-400" />
              <span>{roomDetails.beds}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span>Up to {roomDetails.guests} Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">◼</span>
              <span>{roomDetails.size}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <section className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                Starting From
              </div>
              <div className="text-3xl font-semibold text-amber-400">
                ₦{roomDetails.price.toLocaleString()}
                <span className="text-sm text-white/50 font-normal ml-2">
                  /night
                </span>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <a
                href="#book"
                className="flex-1 md:flex-none px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 text-center"
              >
                Book This Room
              </a>
              <a
                href="tel:+2348135083826"
                className="flex-1 md:flex-none px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 text-center"
              >
                Call to Reserve
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex gap-1 border-b border-white/10 overflow-x-auto">
          {["overview", "gallery", "amenities"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold uppercase tracking-wider text-sm transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? "text-amber-400 border-b-2 border-amber-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                About This Room
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {roomDetails.description}
              </p>
            </div>

            {/* Features Grid */}
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roomFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            {/* Quick Preview Images */}
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                Room Preview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roomImages.slice(0, 3).map((image) => (
                  <div
                    key={image.id}
                    className="relative h-72 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-lg font-semibold">{image.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div>
            <h2 className="text-3xl font-light text-white mb-8">
              Complete Gallery
            </h2>
            <ImageGallery images={roomImages} />
          </div>
        )}

        {/* Amenities Tab */}
        {activeTab === "amenities" && (
          <div>
            <h2 className="text-3xl font-light text-white mb-8">
              Room Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {roomDetails.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/80 text-lg py-3 border-b border-white/5"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={roomImages[7].url}
            alt="Book Now"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 font-semibold">
              Premium Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Book the Phantom Affluent room today and indulge in contemporary
            elegance and unmatched comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="group px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:-translate-y-1"
            >
              Reserve Now
              <ChevronRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
            <a
              href="tel:+2348135083826"
              className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-slate-900 font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Additional Info Bar */}
      <section className="bg-slate-900 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-white/60 text-sm">Room Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-white/60 text-sm">Guest Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                Premium
              </div>
              <div className="text-white/60 text-sm">Amenities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">4.9★</div>
              <div className="text-white/60 text-sm">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
