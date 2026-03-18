"use client";

import { useRef } from "react";
import { PremadesSection } from "@/components/sections/premades";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactLenis, type LenisRef } from "lenis/react";

export default function Premades() {
  const lenisRef = useRef<LenisRef>(null);
  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="relative z-1 w-full shadow">
      <Header />
      <main>
        <PremadesSection />
      </main>
      </div>
      <Footer />
    </>
  );
}
