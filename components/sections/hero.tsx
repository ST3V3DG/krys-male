import Image from "next/image";
import Link from "next/link";
import { ClipPathCarousel } from "@/components/clip-path-carousel";
import { ContactButton } from "@/components/contact-button";
import Floating, { FloatingElement } from "@/components/parallax-floating";
import { Button } from "@/components/ui/button";

const images = [
	{ src: "/images/hoods.webp", alt: "hero image", title: "" },
	{ src: "/images/tallya.webp", alt: "hero image", title: "" },
	{ src: "/images/lunear.webp", alt: "hero image", title: "" },
	{ src: "/images/hoods.webp", alt: "hero image", title: "" },
	{ src: "/images/tallya.webp", alt: "hero image", title: "" },
	{ src: "/images/lunear.webp", alt: "hero image", title: "" },
	{ src: "/images/hoods.webp", alt: "hero image", title: "" },
	{ src: "/images/tallya.webp", alt: "hero image", title: "" },
	{ src: "/images/lunear.webp", alt: "hero image", title: "" },
];

export function HeroSection() {
	return (
		<section className="py-6 lg:py-32 min-h-svh">
			<div className="mx-auto max-w-6xl px-6 flex flex-col gap-16 size-full relative items-center justify-center">
				<div className="absolute inset-0 -z-1">
					{/*<Floating className="size-full relative hidden lg:block" sensitivity={1}>
						<FloatingElement className="absolute -z-1 top-12 right-[6vw] h-60 rounded-lg aspect-2/3">
							<Image
								className="size-full object-cover"
								alt="hero image"
								src={images[0].src}
								width={400}
								height={800}
							/>
						</FloatingElement>
						<FloatingElement className="absolute -z-1 top-16 left-[6vw] h-60 aspect-2/3">
							<div>
								<Image
									className="size-full object-cover"
									alt="hero image"
									src={images[1].src}
									width={400}
									height={800}
								/>
							</div>
						</FloatingElement>
						<FloatingElement className="absolute -z-1 bottom-8 left-[8vw] h-54 aspect-2/3">
							<div>
								<Image
									className="size-full object-cover"
									alt="hero image"
									src={images[2].src}
									width={400}
									height={800}
								/>
							</div>
						</FloatingElement>
						<FloatingElement className="absolute -z-1 bottom-8 right-[8vw] h-54 aspect-2/3">
							<div>
								<Image
									className="size-full object-cover"
									alt="hero image"
									src={images[2].src}
									width={400}
									height={800}
								/>
							</div>
						</FloatingElement>
					</Floating>*/}
				</div>
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
          {/*<SwipeableCards images={images} loop />*/}
          <ClipPathCarousel images={images} />
        </div>
			</div>
		</section>
	);
}
