"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTopButton() {
	const scrollToTop = () => {
		if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Button
			variant="ghost"
			className="group inline-flex items-center text-sm font-medium cursor-pointer text-white dark:text-black rounded-full bg-primary px-4"
			onClick={() => scrollToTop()}
		>
			Back to top
			<ArrowUp className="ml-1 transition duration-300 group-hover:-translate-y-1" />
		</Button>
	);
}
