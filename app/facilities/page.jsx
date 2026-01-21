"use client";
import { useState, useEffect } from "react";
import {
  Home,
  Utensils,
  Wifi,
  Car,
  Dumbbell,
  Coffee,
  Wind,
  Shield,
  Users,
  Sparkles,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Waves,
  Briefcase,
  HeartPulse,
  PartyPopper,
  X,
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
        Loading facilities...
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
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
    <img
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      alt="De Phantom Continental Hotel"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
      <div className="flex items-center justify-center mb-6">
        <Sparkles className="w-16 h-16 text-amber-500 animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6 text-center">
        Our Facilities
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-center max-w-4xl tracking-wide text-gray-200">
        World-Class Amenities for an Unforgettable Stay
      </p>
      <div className="flex items-center space-x-2 text-amber-500">
        <MapPin className="w-5 h-5" />
        <span className="text-lg tracking-wide">
          De Phantom Continental Hotel
        </span>
      </div>
    </div>
  </section>
);

// Facility Card Component
const FacilityCard = ({ facility, onClick }) => {
  const Icon = facility.icon;
  return (
    <div
      onClick={() => onClick(facility)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100 hover:border-amber-500 transform hover:scale-105"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              {facility.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">
          {facility.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {facility.hours && (
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{facility.hours}</span>
              </div>
            )}
          </div>
          <button className="flex items-center space-x-1 text-amber-600 hover:text-amber-700 font-medium">
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Facility Modal Component
const FacilityModal = ({ facility, onClose }) => {
  if (!facility) return null;
  const Icon = facility.icon;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-500 p-3 rounded-xl">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-light text-white">
                {facility.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {facility.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {facility.hours && (
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Operating Hours</p>
                  <p className="text-gray-600">{facility.hours}</p>
                </div>
              </div>
            )}
            {facility.location && (
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">{facility.location}</p>
                </div>
              </div>
            )}
          </div>

          {facility.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Features & Amenities
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {facility.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={() => (window.location.href = "tel:+2348135083826")}
              className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Facilities Section
const FacilitiesSection = ({ onSelectFacility }) => {
  const facilities = [
    {
      icon: Utensils,
      title: "Restaurant & Bar",
      description:
        "Indulge in exquisite dining experiences with our world-class chefs preparing international and local cuisines.",
      fullDescription:
        "Our signature restaurant offers an exceptional culinary journey, featuring a diverse menu that celebrates both international flavors and authentic local dishes. With elegant ambiance and impeccable service, every meal becomes a memorable experience. Our bar offers premium spirits, craft cocktails, and an extensive wine selection.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      hours: "6:00 AM - 11:00 PM",
      location: "Ground Floor",
      features: [
        "International & Local Cuisine",
        "Premium Bar Selection",
        "Private Dining Rooms",
        "Outdoor Terrace Seating",
        "Live Music (Weekends)",
        "Special Dietary Options",
      ],
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description:
        "Stay connected with complimentary high-speed internet access throughout the hotel premises.",
      fullDescription:
        "Experience seamless connectivity with our state-of-the-art fiber-optic WiFi infrastructure. Whether you're working remotely, streaming content, or staying in touch with loved ones, our high-speed internet ensures you're always connected. Available in all rooms, public areas, and outdoor spaces.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      hours: "24/7 Available",
      location: "Hotel-wide",
      features: [
        "Fiber-Optic Connection",
        "Available in All Rooms",
        "Public Area Coverage",
        "Business-Class Speed",
        "Secure Network",
        "Technical Support Available",
      ],
    },
    {
      icon: Car,
      title: "Parking & Valet",
      description:
        "Secure parking facilities with 24/7 valet service for your convenience and peace of mind.",
      fullDescription:
        "Our spacious parking facility offers secure, well-lit parking spaces with round-the-clock security surveillance. Professional valet service is available to ensure your vehicle is safely parked and retrieved at your convenience. We also offer electric vehicle charging stations for eco-conscious guests.",
      image:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
      hours: "24/7 Service",
      location: "Hotel Entrance",
      features: [
        "Secure Parking",
        "24/7 Valet Service",
        "CCTV Surveillance",
        "EV Charging Stations",
        "Covered Parking",
        "Car Wash Available",
      ],
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description:
        "Modern gym equipment and personal training services to maintain your wellness routine.",
      fullDescription:
        "Our fully-equipped fitness center features the latest cardiovascular and strength training equipment from leading brands. With dedicated trainers available for personalized workout sessions, you can maintain your fitness goals even while traveling. The facility also includes a separate yoga and stretching area.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      hours: "5:00 AM - 11:00 PM",
      location: "3rd Floor",
      features: [
        "Modern Equipment",
        "Personal Trainers",
        "Yoga & Stretching Area",
        "Locker Rooms",
        "Towel Service",
        "Complimentary Water",
      ],
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description:
        "Relax and unwind in our luxurious outdoor swimming pool with poolside service.",
      fullDescription:
        "Dive into luxury at our stunning outdoor swimming pool, surrounded by comfortable loungers and tropical landscaping. The pool area offers a serene escape where you can relax, swim, or simply soak up the sun. Poolside bar service ensures refreshments are always within reach.",
      image:
        "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      hours: "7:00 AM - 8:00 PM",
      location: "Rooftop Level",
      features: [
        "Heated Pool",
        "Poolside Bar",
        "Sun Loungers",
        "Towel Service",
        "Changing Rooms",
        "Kids Area",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Center",
      description:
        "Fully equipped business facilities for meetings, conferences, and professional work.",
      fullDescription:
        "Our comprehensive business center caters to all your professional needs with modern meeting rooms, conference facilities, and a quiet workspace. High-speed internet, printing services, and audio-visual equipment are readily available. Our professional staff can assist with event planning and coordination.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      hours: "24/7 Access",
      location: "2nd Floor",
      features: [
        "Meeting Rooms",
        "Conference Hall",
        "Printing Services",
        "AV Equipment",
        "Secretarial Support",
        "Private Workspaces",
      ],
    },
    {
      icon: HeartPulse,
      title: "Spa & Wellness",
      description:
        "Rejuvenate your body and mind with our premium spa treatments and wellness services.",
      fullDescription:
        "Escape to tranquility in our luxurious spa facility offering a range of therapeutic treatments, massages, and wellness services. Our experienced therapists use premium products and traditional techniques to provide deeply relaxing experiences. The spa also features a sauna and steam room.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      hours: "9:00 AM - 9:00 PM",
      location: "Ground Floor",
      features: [
        "Massage Therapy",
        "Facial Treatments",
        "Sauna & Steam Room",
        "Aromatherapy",
        "Manicure & Pedicure",
        "Couples Packages",
      ],
    },
    {
      icon: PartyPopper,
      title: "Event Spaces",
      description:
        "Versatile venues for weddings, conferences, and special celebrations with full support.",
      fullDescription:
        "Host unforgettable events in our elegant and versatile event spaces. From intimate gatherings to grand celebrations, our venues can be customized to suit your needs. Our dedicated events team provides comprehensive planning support, catering services, and technical assistance to ensure your event is perfect.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c2b5?w=800&q=80",
      hours: "By Appointment",
      location: "Multiple Venues",
      features: [
        "Multiple Event Spaces",
        "Wedding Packages",
        "Full Catering Service",
        "Event Planning Team",
        "Audio-Visual Support",
        "Customizable Setups",
      ],
    },
    {
      icon: Coffee,
      title: "24/7 Room Service",
      description:
        "Round-the-clock dining service delivered directly to your room with extensive menu options.",
      fullDescription:
        "Enjoy the convenience of 24-hour room service with an extensive menu featuring breakfast items, main courses, snacks, and beverages. Our culinary team is ready to prepare your favorite dishes at any time of day or night, delivered promptly to your room with impeccable presentation.",
      image:
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",
      hours: "24/7 Available",
      location: "In-Room Service",
      features: [
        "Extensive Menu",
        "Quick Delivery",
        "Special Requests",
        "Dietary Accommodations",
        "Breakfast in Bed",
        "Late Night Options",
      ],
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description:
        "Advanced security systems and trained personnel ensuring your safety around the clock.",
      fullDescription:
        "Your safety is our top priority. Our comprehensive security system includes 24/7 surveillance, trained security personnel, secure access controls, and emergency response protocols. Fire safety equipment, first aid facilities, and backup power systems ensure you're protected at all times.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      hours: "24/7 Monitoring",
      location: "Hotel-wide",
      features: [
        "24/7 Security Staff",
        "CCTV Surveillance",
        "Secure Access Controls",
        "Fire Safety Systems",
        "Emergency Response",
        "First Aid Available",
      ],
    },
    {
      icon: Users,
      title: "Concierge Services",
      description:
        "Personalized assistance with reservations, tours, transportation, and local recommendations.",
      fullDescription:
        "Our knowledgeable concierge team is dedicated to making your stay exceptional. From restaurant reservations and tour bookings to transportation arrangements and insider tips on local attractions, we're here to assist with all your needs and ensure you experience the best of the area.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      hours: "24/7 Available",
      location: "Lobby",
      features: [
        "Tour Arrangements",
        "Restaurant Bookings",
        "Transportation Service",
        "Local Recommendations",
        "Ticket Reservations",
        "Special Requests",
      ],
    },
    {
      icon: Wind,
      title: "Laundry & Dry Cleaning",
      description:
        "Professional laundry and dry cleaning services with same-day options available.",
      fullDescription:
        "Keep your wardrobe fresh with our professional laundry and dry cleaning services. We offer same-day service, express options, and special garment care. Our experienced staff handles each item with care, ensuring your clothes are returned in pristine condition.",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80",
      hours: "7:00 AM - 10:00 PM",
      location: "Collection Service",
      features: [
        "Same-Day Service",
        "Dry Cleaning",
        "Ironing & Pressing",
        "Special Garment Care",
        "Express Options",
        "Eco-Friendly Products",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
          World-Class Facilities
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-4" />
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Experience exceptional amenities designed to enhance every moment of
          your stay at De Phantom Continental Hotel
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              facility={facility}
              onClick={onSelectFacility}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Five-star amenities and services that exceed expectations",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced security systems ensuring guest safety 24/7",
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Professionally trained team dedicated to your comfort",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock assistance whenever you need it",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center tracking-wide">
          Why Choose De Phantom Continental
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-amber-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Icon className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
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
        Experience Luxury & Comfort
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
        Book your stay at De Phantom Continental Hotel and enjoy world-class
        facilities
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

// Main Component
export default function FacilitiesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LuxuryLoader />;

  return (
    <main className="min-h-screen bg-white">
      {/* <HomeButton /> */}
      <Hero />
      <FacilitiesSection onSelectFacility={setSelectedFacility} />
      <WhyChooseUs />
      <CTASection />
      {selectedFacility && (
        <FacilityModal
          facility={selectedFacility}
          onClose={() => setSelectedFacility(null)}
        />
      )}
    </main>
  );
}
