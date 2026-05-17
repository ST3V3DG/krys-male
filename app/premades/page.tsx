"use client";

import { type LenisRef, ReactLenis } from "lenis/react";
import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { PremadesSection } from "@/components/sections/premades";

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
