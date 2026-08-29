import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import EmiCalculator from "@/components/EmiCalculator";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <EmiCalculator />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
