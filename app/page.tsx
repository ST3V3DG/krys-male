"use client";

import { type LenisRef, ReactLenis } from "lenis/react";
import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AboutSection } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";
import { FaqsSection } from "@/components/sections/faqs";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
	const lenisRef = useRef<LenisRef>(null);
	return (
		<>
			<ReactLenis root ref={lenisRef} />
			<div className="relative z-1 w-full shadow">
				<Header />
				<main>
					<HeroSection />
					<AboutSection />
					{/*<ProjectsSection />*/}
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
