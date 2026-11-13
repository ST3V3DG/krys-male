import { BatteryCharging, GitPullRequest, Layers, RadioTower, SquareKanban, WandSparkles } from "lucide-react";

type Feature = {
	heading: string;
	description: string;
	icon: React.ReactNode;
};

const title = "What I offer for children's books";
const features: Feature[] = [
	{
		heading: "Full book illustration",
		description:
			"Picture books, board books, and chapter books illustrated cover to cover, with sketches, color, and final files.",
		icon: <GitPullRequest className="size-6 dark:text-black" />,
	},
	{
		heading: "Character design",
		description:
			"Character sheets with front, side, and back views, ready to reuse across pages and marketing.",
		icon: <SquareKanban className="size-6 dark:text-black" />,
	},
	{
		heading: "Book covers",
		description:
			"Front cover, spine, and back cover, with wraparound option for print.",
		icon: <RadioTower className="size-6 dark:text-black" />,
	},
	{
		heading: "Interior illustrations",
		description:
			"Spot illustrations, half-page, and full-page color art for interiors.",
		icon: <WandSparkles className="size-6 dark:text-black" />,
	},
	{
		heading: "Rush delivery",
		description:
			"Expedited turnaround for tight deadlines, available on request.",
		icon: <Layers className="size-6 dark:text-black" />,
	},
	{
		heading: "Usage rights",
		description:
			"Print publication rights included; extended rights available as add-ons.",
		icon: <BatteryCharging className="size-6 dark:text-black" />,
	},
];

export function ServicesSection() {
	return (
		<section className="py-32 bg-secondary/10">
			<div className=" max-w-6xl mx-auto px-6">
				<div className="mx-auto mb-16 max-w-3xl text-center">
					<h2 className="text-4xl font-medium text-pretty lg:text-5xl text-primary">{title}</h2>
				</div>
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div key={index} className="flex flex-col">
							<div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
								{feature.icon}
							</div>
							<h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
							<p className="opacity-80">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
