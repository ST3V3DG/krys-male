import Link from "next/link";
import { ClipPathCarousel } from "@/components/clip-path-carousel";
import { ContactButton } from "@/components/contact-button";
import { Button } from "@/components/ui/button";

const images = [
	{ src: "/images/hero/A.png", alt: "hero image", title: "" },
	{ src: "/images/hero/B.png", alt: "hero image", title: "" },
	{ src: "/images/hero/C.png", alt: "hero image", title: "" },
	{ src: "/images/hero/D.png", alt: "hero image", title: "" },
	{ src: "/images/hero/E.png", alt: "hero image", title: "" },
	{ src: "/images/hero/F.png", alt: "hero image", title: "" },
];

export function HeroSection() {
	return (
		<section className="py-6 lg:py-32 min-h-svh">
			<div className="mx-auto max-w-6xl px-6 flex flex-col gap-16 size-full relative items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1 className="text-7xl text-balance md:text-7xl max-w-2xl lg:text-center text-primary">
						Give live to your history
					</h1>
					<p className="text-muted-foreground max-w-md text-pretty lg:text-center">
						Make your readers feel like they are part of your story. I'm a talented writer and I'm
						passionate about bringing your stories to life.
					</p>
					<div className="flex gap-4 w-full justify-center items-center mt-6">
						<Button size="lg" variant="outline" className="ring-primary px-10 bg-background">
							<Link className="text-primary" href="#about">
								Explore
							</Link>
						</Button>
						<ContactButton className="min-w-52 font-gambarino">Contact me</ContactButton>
					</div>
				</div>
				<div className="flex gap-4">
					<ClipPathCarousel images={images} />
				</div>
			</div>
		</section>
	);
}
