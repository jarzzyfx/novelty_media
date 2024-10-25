"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/homepage/Hero";
import More from "@/components/homepage/More";
import FeaturedSectors from "@/components/homepage/FeaturedSectors";
import Values from "@/components/homepage/Values";
import Corevalues from "@/components/homepage/Corevalues";
import KnowMore from "@/components/homepage/KnowMore";
import ClientReviews from "@/components/homepage/ClientReviews";
import DownloadPage from "@/components/homepage/DownloadPage";
import Subscribe from "@/components/homepage/Subscribe";
import { Footer } from "@/components/Footer";

const Homepage = () => {
  const lenisRef = useRef<Lenis | null>(null);

  // lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Duration of the smooth scroll
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      // smooth: true, // Enable smooth scroll
      smoothWheel: true,
    });
    // Store the Lenis instance in a ref to avoid reinitializing on each render
    lenisRef.current = lenis;

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-1">
      <Hero />
      <More />
      <FeaturedSectors />
      <Values />
      <Corevalues />
      <KnowMore />
      <ClientReviews />
      <DownloadPage />
      <Subscribe />
      <ClientReviews />
      <Footer />
    </div>
  );
};

export default Homepage;
