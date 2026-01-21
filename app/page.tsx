import React from "react";
import HeroSection from "./components/HeroSection";

import About from "./components/About";
import Galary from "./components/Galary";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <HeroSection />

      <About />
      <Galary />
      <Footer />
    </div>
  );
};

export default page;
