"use client";

import AboutUs from "@/components/aboutUS";
import ContactPage from "@/components/contactUs";
// Adjust path as needed
import Footer from "@/components/Footer"; // Adjust path as needed
import LoaderProvider from "@/components/LoaderProvider";
import Navbar from "@/components/Navbar";

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
          <ContactPage />
        </main>

        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutPage;
