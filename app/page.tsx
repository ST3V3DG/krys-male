"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ProcessSection } from "@/components/sections/process";
import { FaqsSection } from "@/components/sections/faqs";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="relative z-1 w-full">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <FaqsSection />
      </main>
      </div>
      <Footer />
    </>
  );
}
