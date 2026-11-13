import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const title = "Illustrations for children's books";

const paragraph1 =
	"I illustrate children's books from cover to last page: picture books, board books, chapter books, and middle-grade novels. Every character and scene is drawn by hand, with no AI, and shaped around your story and your readers' age group.";

const paragraph2 =
	"I've been working in this industry since 2017. Whether you need a full book or a single illustration, I'll guide you through sketches, color, and final files so the result feels right for young readers.";

export function AboutSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto  max-w-6xl px-6">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<h2 className="text-4xl lg:text-5xl text-pretty font-medium text-primary">{title}</h2>
					<div className="space-y-6">
						<p className="first-letter:ml-4">{paragraph1}</p>
						<p className="first-letter:ml-4">{paragraph2}</p>
						<Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
							<Link href="#">
								<span>Learn More</span>
								<ChevronRight className="size-4" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
