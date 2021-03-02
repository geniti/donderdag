import React from "react";
import Footer from "../components/Footer";
import GalleryStucwerk from "../components/GalleryStucwerk";
import HeroSection from "../components/HeroSection";
import Reviews from "../components/Reviews";

function reviews() {
  return (
    <div>
      <HeroSection />
      <Reviews />
      <GalleryStucwerk />
      <Footer />
    </div>
  );
}

export default reviews;
