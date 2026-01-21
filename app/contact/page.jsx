"use client";
import { useState, useEffect } from "react";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Calendar,
  User,
  Building,
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
        Loading contact information...
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
        <MessageSquare className="w-16 h-16 text-amber-500 animate-pulse" />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-center max-w-4xl tracking-wide text-gray-200">
        We're Here to Assist You 24/7
      </p>
      <div className="flex items-center space-x-2 text-amber-500">
        <MapPin className="w-5 h-5" />
        <span className="text-lg tracking-wide">Ikate, Lagos, Nigeria</span>
      </div>
    </div>
  </section>
);

// Contact Info Cards
const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+234 813 508 3826",
      secondary: "Available 24/7",
      action: () => (window.location.href = "tel:+2348135083826"),
      bgGradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@dephantomhotel.com",
      secondary: "We reply within 24 hours",
      action: () => (window.location.href = "mailto:info@dephantomhotel.com"),
      bgGradient: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "Ikate, Lekki",
      secondary: "Lagos, Nigeria",
      action: () =>
        window.open("https://maps.google.com/?q=Ikate+Lekki+Lagos", "_blank"),
      bgGradient: "from-amber-500 to-amber-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "24/7 Reception",
      secondary: "Always open for you",
      action: null,
      bgGradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white -mt-32 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                onClick={info.action}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:scale-105 ${
                  info.action ? "cursor-pointer" : ""
                } border border-gray-100`}
              >
                <div
                  className={`bg-gradient-to-br ${info.bgGradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">{info.primary}</p>
                <p className="text-gray-500 text-sm">{info.secondary}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
              Send Us a Message
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mb-6" />
            <p className="text-gray-600 text-lg mb-8">
              Have a question or special request? Fill out the form below and
              our team will get back to you as soon as possible.
            </p>

            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-green-900 font-semibold mb-1">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="event">Event Booking</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6654775447195!2d3.4827!3d6.4449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNDEuNiJOIDPCsDI4JzU3LjciRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="De Phantom Continental Hotel Location"
              />
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-light mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button
                  onClick={() => (window.location.href = "tel:+2348135083826")}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span className="font-medium">Call Us Now</span>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    24/7 Available
                  </div>
                </button>

                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span className="font-medium">Book a Room</span>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    Best Rates
                  </div>
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=Ikate+Lekki+Lagos",
                      "_blank"
                    )
                  }
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span className="font-medium">Get Directions</span>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    View Map
                  </div>
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Facebook, color: "blue", name: "Facebook" },
                  { icon: Instagram, color: "pink", name: "Instagram" },
                  { icon: Twitter, color: "sky", name: "Twitter" },
                  { icon: Linkedin, color: "blue", name: "LinkedIn" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => alert(`${social.name} page coming soon!`)}
                      className={`bg-${social.color}-50 hover:bg-${social.color}-100 p-4 rounded-xl transition-all duration-300 flex items-center justify-center group transform hover:scale-110`}
                    >
                      <Icon
                        className={`w-6 h-6 text-${social.color}-600 group-hover:text-${social.color}-700`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your check-in and check-out times?",
      answer:
        "Check-in time is from 2:00 PM and check-out time is at 12:00 PM. Early check-in and late check-out are available upon request and subject to availability.",
    },
    {
      question: "Do you offer airport shuttle services?",
      answer:
        "Yes, we offer airport shuttle services to and from Murtala Muhammed International Airport. Please contact us at least 24 hours in advance to arrange pickup.",
    },
    {
      question: "Is parking available at the hotel?",
      answer:
        "Yes, we offer complimentary secure parking for all our guests. Valet parking service is also available 24/7.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made up to 48 hours before arrival are free of charge. Cancellations made within 48 hours of arrival will incur a one-night charge.",
    },
    {
      question: "Do you have facilities for events and conferences?",
      answer:
        "Yes, we have multiple event spaces suitable for weddings, conferences, and corporate events. Our events team can help you plan and execute your perfect event.",
    },
    {
      question: "Are pets allowed at the hotel?",
      answer:
        "Currently, we do not allow pets at the hotel. However, service animals are always welcome. Please contact us in advance for special arrangements.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-16" />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <div
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <div className="w-6 h-6 text-amber-600">▼</div>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
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
        Ready to Book Your Stay?
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
        Experience luxury and comfort at De Phantom Continental Hotel, Ikate
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
          Call Us
        </button>
      </div>
      <p className="mt-8 text-gray-400 text-sm">
        Best rate guarantee · Flexible cancellation · Instant confirmation
      </p>
    </div>
  </section>
);

// Main Component
export default function ContactPage() {
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
      <ContactInfoCards />
      <ContactForm />
      <FAQSection />
      <CTASection />
    </main>
  );
}
