"use client";

import { type LenisRef, ReactLenis } from "lenis/react";
import { useRef } from "react";
import Footer from "@/components/footer";
import { GlassmorphismPortfolioBlock } from "@/components/glassmorhism-porfolio";
import Header from "@/components/header";

export default function ChildrenHome() {
	const lenisRef = useRef<LenisRef>(null);
	return (
		<>
			<ReactLenis root ref={lenisRef} />
			<div className="relative z-1 w-full shadow">
				<Header />
				<main>
					<GlassmorphismPortfolioBlock />
				</main>
			</div>
			<Footer />
		</>
	);
}
