"use client";
import { useState } from "react";

/**
 * Luxury Hotel Rooms Gallery Component
 * De Phantom Continental Hotel Ikate - Lekki Phase 1, Lagos
 *
 * Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * - Optimized image loading with Next.js Image component simulation
 * - Smooth hover effects with image zoom and gradient overlay
 * - Premium card-based design with luxury aesthetics
 * - Dark theme background
 * - Fast-loading and performance-optimized
 */

export default function HotelRoomsGallery() {
  // Room data with optimized placeholder images (using high-quality hotel room stock photos)
  const rooms = [
    {
      id: 1,
      name: "Phantom Afluent",
      description: "Exclusively Furnished, Breakfast for One.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop&q=80",
      link: "/rooms/standard",
    },
    {
      id: 2,
      name: "Phantom Royal",
      description: "Exclusively Furnished, Breakfast for One.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop&q=80",
      link: "/rooms/deluxe",
    },
    {
      id: 3,
      name: "Phantom Mini Rolls Royce",
      description: "Exclusively Furnished, Breakfast for Two.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
      link: "/rooms/executive",
    },
    {
      id: 4,
      name: "Phantom Cullinan",
      description: "Lavishly Furnished, Breakfast for Two.",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop&q=80",
      link: "/rooms/royal-suite",
    },
    {
      id: 5,
      name: "Phantom Rolls Royce Pent House",
      description: "Lavishly Furnished, with a Spacious Rooftop Sit-Out",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop&q=80",
      link: "/rooms/royal-suite",
    },
    {
      id: 6,
      name: "Phantom Rolls Royce Premium Suite.",
      description: "A Bed and a Living Room with Kitchen, Breakfast for Two",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop&q=80",
      link: "/rooms/royal-suite",
    },
    {
      id: 7,
      name: "Phantom Cullinan Luxury (Double Bed)",
      description:
        "Lavishly Furnished, with a Spacious Balcony, Double Bed, and Double Toilet, Breakfast for two",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop&q=80",
      link: "/rooms/royal-suite",
    },
    {
      id: 8,
      name: "Restaurant View",
      description:
        "Lavishly Furnished, with a Spacious Balcony, Double Bed, and Double Toilet, Breakfast for two",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop&q=80",
      link: "/rooms/royal-suite",
    },
    {
      id: 9,
      name: "Swimming Pool View",
      description:
        "Lavishly Furnished, with a Spacious Balcony, Double Bed, and Double Toilet, Breakfast for two",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop&q=80",
      link: "/rooms/royal-suite",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  /**
   * Simulates Next.js Image component behavior
   * In production, replace with actual Next.js Image component
   * Benefits: automatic optimization, lazy loading, responsive sizing
   */
  const OptimizedImage = ({ src, alt, className }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy" // Native lazy loading for performance
      className={className}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">
          De Phantom Continental Hotel Ikate
        </h1>
        <p className="text-gray-400 text-lg font-light tracking-wide">
          Lekki Phase 1, Lagos • Where Luxury Meets Sophistication
        </p>
        <div className="w-24 h-px bg-amber-500 mx-auto mt-6"></div>
      </div>

      {/* 
        Rooms Grid Layout
        - Mobile: 1 column (default)
        - Tablet (md): 2 columns
        - Desktop (lg): 3 columns
        - Gap spacing for visual breathing room
      */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-white mb-8 text-center">
          Our Rooms & Suites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(room.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => console.log(`Navigate to ${room.link}`)}
            >
              {/* 
                Image Container with Hover Effects
                - Image zoom effect on hover using transform scale
                - Dark gradient overlay appears on hover
                - Smooth transitions for premium feel
              */}
              <div className="relative h-72 overflow-hidden">
                <OptimizedImage
                  src={room.image}
                  alt={room.name}
                  className={`transition-transform duration-700 ease-out ${
                    hoveredCard === room.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Gradient overlay - appears on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                    hoveredCard === room.id ? "opacity-70" : "opacity-0"
                  }`}
                ></div>

                {/* Premium badge - optional accent */}
                {room.name === "Royal Suite" && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs px-3 py-1 rounded-full font-light tracking-wider">
                    SIGNATURE
                  </div>
                )}
              </div>

              {/* 
                Content Section
                - Text reveal animation on hover
                - Luxury typography with proper hierarchy
                - Button with premium hover state
              */}
              <div className="p-6">
                <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                  {room.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {room.description}
                </p>

                {/* 
                  CTA Button
                  - Premium hover effect with color transition
                  - Gold accent for luxury feel
                  - Subtle transform on hover
                */}
                <button
                  className={`w-full py-3 px-6 border border-amber-500 text-amber-500 rounded 
                    font-light tracking-widest text-sm transition-all duration-300
                    hover:bg-amber-500 hover:text-black hover:border-amber-500
                    ${
                      hoveredCard === room.id ? "transform translate-y-0" : ""
                    }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when clicking button
                    console.log(`Book ${room.name}`);
                  }}
                >
                  VIEW DETAILS
                </button>
              </div>

              {/* 
                Subtle accent line at bottom
                - Gold color appears on hover
                - Adds sophistication without being flashy
              */}
              <div
                className={`h-1 bg-amber-500 transition-all duration-500 ${
                  hoveredCard === room.id ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-gray-400 mb-6 font-light text-lg">
          Experience world-class hospitality in the heart of Lekki
        </p>
        <button className="bg-amber-500 text-black px-8 py-4 rounded hover:bg-amber-400 transition-colors duration-300 font-light tracking-widest text-sm">
          BOOK YOUR STAY
        </button>
      </div>
    </div>
  );
}
