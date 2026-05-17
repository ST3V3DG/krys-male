"use client";

import { type LenisRef, ReactLenis } from "lenis/react";
import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AboutSection } from "@/components/sections/children/about";
import { HeroSection } from "@/components/sections/children/hero";
import { ServicesSection } from "@/components/sections/children/services";
import { FaqsSection } from "@/components/sections/faqs";
import { ProcessSection } from "@/components/sections/process";

export default function ChildrenHome() {
	const lenisRef = useRef<LenisRef>(null);
	return (
		<>
			<ReactLenis root ref={lenisRef} />
			<div className="relative z-1 w-full shadow">
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
