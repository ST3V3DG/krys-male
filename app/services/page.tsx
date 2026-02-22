"use client";

import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactLenis, type LenisRef } from "lenis/react";
import { ServiceDetailsSection, ServicesSection } from "@/components/sections/services";

export default function Services() {
  const lenisRef = useRef<LenisRef>(null);
  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="relative z-1 w-full">
        <Header />
        <main>
          <ServicesSection />
          <ServiceDetailsSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
