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
  Check,
  X,
  UtensilsCrossed,
  Home,
  Sparkles,
} from "lucide-react";

// Phantom Rolls Royce Premium Suite Images
const roomImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    title: "Master Bedroom Suite",
    category: "bedroom",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    title: "Spacious Living Room",
    category: "living",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80",
    title: "Modern Kitchen",
    category: "kitchen",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80",
    title: "Luxury Bathroom",
    category: "bathroom",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80",
    title: "Dining Area",
    category: "dining",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
    title: "Panoramic City View",
    category: "view",
  },
];

// Suite Details
const suiteDetails = {
  name: "Phantom Rolls Royce Premium Suite",
  tagline: "Luxury Living Redefined",
  price: 85000,
  description:
    "Indulge in the pinnacle of luxury with our Phantom Rolls Royce Premium Suite. This expansive accommodation features a separate bedroom, elegant living room, and fully-equipped kitchen, creating a home-away-from-home experience. Start each morning with our complimentary breakfast for two, delivered to your suite or enjoyed in our restaurant.",
  guests: 2,
  beds: "1 King Size Bed",
  size: "75 sqm",
  view: "Premium City View",
  amenities: [
    { icon: Wifi, name: "High-Speed WiFi", included: true },
    { icon: Tv, name: '65" Smart TV in Living Room', included: true },
    { icon: Tv, name: '42" TV in Bedroom', included: true },
    { icon: Wind, name: "Multi-Zone Climate Control", included: true },
    { icon: Coffee, name: "Nespresso Coffee Machine", included: true },
    {
      icon: UtensilsCrossed,
      name: "Complimentary Breakfast for 2",
      included: true,
    },
    { name: "Fully Equipped Kitchen", included: true },
    { name: "Refrigerator & Microwave", included: true },
    { name: "Premium Mini Bar", included: true },
    { name: "Electronic Safe", included: true },
    { name: "Designer Toiletries", included: true },
    { name: "Plush Bathrobes & Slippers", included: true },
    { name: "24/7 Butler Service", included: true },
    { name: "Twice Daily Housekeeping", included: true },
    { name: "Executive Work Desk", included: true },
    { name: "Separate Living & Dining Area", included: true },
    { name: "Walk-in Closet", included: true },
    { name: "Rain Shower & Bathtub", included: true },
  ],
  features: [
    "Separate bedroom and living room",
    "Fully equipped modern kitchen",
    "Complimentary gourmet breakfast for 2 guests",
    "Floor-to-ceiling panoramic windows",
    "Marble bathroom with premium fixtures",
    "Designer furniture and decor",
    "Dining area for 4 guests",
    "Premium sound system",
    "Blackout and sheer curtains",
    "Individual temperature controls",
    "Extra-large workspace",
    "Private entrance hallway",
  ],
  specialOffers: [
    {
      title: "Complimentary Breakfast",
      description: "Daily gourmet breakfast for 2 guests included",
      icon: UtensilsCrossed,
    },
    {
      title: "Suite Living",
      description: "Separate bedroom, living room & kitchen",
      icon: Home,
    },
    {
      title: "Premium Service",
      description: "Dedicated butler service available 24/7",
      icon: Sparkles,
    },
  ],
};

// Image Gallery Component
function ImageGallery({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`group relative overflow-hidden rounded-lg cursor-pointer ${
            index === 0 ? "col-span-2 row-span-2 h-96 lg:h-full" : "h-48"
          }`}
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-white font-light text-lg">{image.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Amenities Grid Component
function AmenitiesGrid({ amenities }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {amenities.map((amenity, index) => {
        const Icon = amenity.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all duration-300 group"
          >
            {Icon && (
              <Icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            )}
            {!Icon && (
              <Check className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            )}
            <span className="text-white/90 text-sm">{amenity.name}</span>
          </div>
        );
      })}
    </div>
  );
}

// Features List Component
function FeaturesList({ features }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-white/80">{feature}</span>
        </div>
      ))}
    </div>
  );
}

// Special Offers Component
function SpecialOffers({ offers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {offers.map((offer, index) => {
        const Icon = offer.icon;
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-xl p-6 hover:border-amber-500/60 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              {offer.title}
            </h3>
            <p className="text-white/70">{offer.description}</p>
          </div>
        );
      })}
    </div>
  );
}

// Main Suite Detail Page Component
export default function PhantomRRPremiumSuitePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roomImages[0].url}
            alt="Phantom Rolls Royce Premium Suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-950" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-full mb-6">
            <span className="text-amber-400 text-sm uppercase tracking-widest font-semibold">
              Premium Suite
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-light text-white mb-4 tracking-wider">
            {suiteDetails.name}
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl text-white/80 font-light italic">
            {suiteDetails.tagline}
          </p>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-20">
        <SpecialOffers offers={suiteDetails.specialOffers} />
      </section>

      {/* Suite Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
              Your Private Residence
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8" />
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {suiteDetails.description}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                <Users className="w-8 h-8 text-amber-400 mb-3" />
                <div className="text-2xl text-white font-semibold mb-1">
                  {suiteDetails.guests}
                </div>
                <div className="text-white/60 text-sm">Guests</div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                <Bed className="w-8 h-8 text-amber-400 mb-3" />
                <div className="text-2xl text-white font-semibold mb-1">
                  {suiteDetails.beds}
                </div>
                <div className="text-white/60 text-sm">Bed Type</div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                <Home className="w-8 h-8 text-amber-400 mb-3" />
                <div className="text-2xl text-white font-semibold mb-1">
                  {suiteDetails.size}
                </div>
                <div className="text-white/60 text-sm">Suite Size</div>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                <UtensilsCrossed className="w-8 h-8 text-amber-400 mb-3" />
                <div className="text-2xl text-white font-semibold mb-1">
                  Free
                </div>
                <div className="text-white/60 text-sm">Breakfast for 2</div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-xl p-6">
              <div className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Starting From
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-bold text-amber-400">
                  ₦{suiteDetails.price.toLocaleString()}
                </span>
                <span className="text-xl text-white/60">/night</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Includes complimentary breakfast for 2</span>
              </div>
            </div>
          </div>

          {/* Right: Additional Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl text-white font-light mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                Suite Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/60">Suite Size</span>
                  <span className="text-white font-semibold">
                    {suiteDetails.size}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/60">View</span>
                  <span className="text-white font-semibold">
                    {suiteDetails.view}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/60">Maximum Occupancy</span>
                  <span className="text-white font-semibold">
                    {suiteDetails.guests} Adults
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/60">Rooms</span>
                  <span className="text-white font-semibold">
                    Bedroom + Living Room
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/60">Kitchen</span>
                  <span className="text-white font-semibold">
                    Fully Equipped
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Check-in/Check-out</span>
                  <span className="text-white font-semibold">2PM / 12PM</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl text-white font-light mb-6">
                Key Features
              </h3>
              <FeaturesList features={suiteDetails.features} />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
              Suite Gallery
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience every luxurious space of the Phantom Rolls Royce
              Premium Suite
            </p>
          </div>

          <ImageGallery images={roomImages} onImageClick={setSelectedImage} />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
            Premium Amenities
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need for an exceptional extended stay experience
          </p>
        </div>

        <AmenitiesGrid amenities={suiteDetails.amenities} />
      </section>

      {/* Breakfast Highlight Section */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1533777857889-4be7c70b0c5c?w=1200&q=80"
                alt="Complimentary Breakfast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full mb-6">
                <span className="text-emerald-400 text-sm uppercase tracking-widest font-semibold">
                  Included
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
                Complimentary Breakfast
              </h2>
              <div className="w-20 h-1 bg-amber-500 mb-8" />
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Start your day right with our gourmet breakfast, complimentary
                for 2 guests. Choose to have it delivered to your suite or enjoy
                it in our elegant restaurant. Our breakfast menu features a wide
                selection of continental and local delicacies, freshly prepared
                daily.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>Available daily from 6:30 AM to 10:30 AM</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>In-room dining or restaurant service</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>Continental and Nigerian cuisine options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roomImages[1].url}
            alt="Book Now"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Ready for Suite Living?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Reserve the Phantom Rolls Royce Premium Suite and experience luxury
            living with complimentary breakfast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="group px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 hover:-translate-y-1"
            >
              Reserve This Suite
              <ChevronRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
            <a
              href="tel:+2348135083826"
              className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-slate-900 font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300"
            >
              Call to Book
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-amber-400" />
              <span>Free Cancellation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-amber-400" />
              <span>Breakfast Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-amber-400" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-full">
            <p className="text-white text-lg">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
