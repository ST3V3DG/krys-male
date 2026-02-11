"use client";

import { type LenisRef, ReactLenis } from "lenis/react";
import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AboutSection } from "@/components/sections/children/about";
import { FaqsSection } from "@/components/sections/faqs";
import { HeroSection } from "@/components/sections/children/hero";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/children/services";

export default function ChildrenHome() {
  const lenisRef = useRef<LenisRef>(null);
  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="relative z-1 w-full">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <FaqsSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
