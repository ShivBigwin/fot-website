"use client";

import AboutUs from "@/components/aboutUS";
import CtaBanner from "@/components/CtaBanner";
import EmiCalculator from "@/components/EmiCalculator";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
// Adjust path as needed
import Footer from "@/components/Footer"; // Adjust path as needed
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LoaderProvider from "@/components/LoaderProvider";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

import React, { Suspense, useEffect, useState } from "react";

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderProvider children={<AboutUs />} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <EmiCalculator />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Faq />
          <CtaBanner />
        </main>

        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutPage;
