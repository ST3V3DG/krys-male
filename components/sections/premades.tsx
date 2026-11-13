import { PremadesTabs } from "@/components/premades-tabs";

const heading = "Ready-made covers";
const description =
	"Pre-designed covers you can buy as-is or customize. Pick a price tier below and ask me to adapt the title, palette, or characters.";

export function PremadesSection() {
	return (
		<section className="py-8 lg:py-32 flex items-center justify-center">
			<div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
				<div className="flex justify-between flex-col lg:flex-row gap-8 *:max-w-md">
					<h1 className="mb-3 font-bold md:mb-4 text-4xl lg:mb-6 text-primary sm:text-5xl md:text-7xl">
						{heading}
					</h1>
					<p className="mb-8 lg:text-lg text-muted-foreground text-pretty">{description}</p>
				</div>
				<PremadesTabs />
			</div>
		</section>
	);
}
