import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const fullBookProjects = [
	{ type: "Picture Book (32 pages)", details: "12-15 full-color illustrations + cover", price: "$2,000 - $5,000" },
	{ type: "Board Book (12-16 pages)", details: "8-12 simple illustrations + cover", price: "$1,500 - $4,000" },
	{ type: "Chapter Book", details: "10-20 spot illustrations + cover", price: "$2,000 - $5,000" },
	{ type: "Middle Grade Novel", details: "Cover + 5-10 interior illustrations", price: "$1,500 - $4,000" },
];

const individualIllustrations = [
	{ type: "Full Page Color", details: "Detailed, full-color illustration", price: "$100 - $800" },
	{ type: "Half Page Color", details: "Medium-sized illustration", price: "$50 - $500" },
	{ type: "Spot Illustration", details: "Small decorative element", price: "$25 - $200" },
	{ type: "Character Design", details: "Complete character sheet (front, side, back)", price: "$200 - $600" },
	{ type: "Simple Black & White", details: "Line art illustration", price: "$75 - $300" },
];

const bookCovers = [
	{ type: "Picture Book Cover", details: "Front, spine, back + wrap-around option", price: "$300 - $800" },
	{ type: "Chapter / Middle Grade Cover", details: "Complete cover design with text placement", price: "$450 - $800" },
	{ type: "eBook Cover Only", details: "Digital-optimized front cover", price: "$130 - $500" },
];

const included = [
	"Initial sketches",
	"Revisions (up to 3 rounds)",
	"Final high-resolution files",
	"Basic usage rights for print publication",
];

export function ChildrenPricingSection() {
	return (
		<section className="py-16 md:py-32 bg-secondary/10">
			<div className="mx-auto max-w-6xl px-6 space-y-12">
				<div className="text-center space-y-3">
					<h2 className="text-3xl font-semibold text-primary md:text-4xl">Pricing for children's books</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						All prices are estimates in USD and may vary with complexity. Contact me for a custom quote.
					</p>
				</div>

				<div>
					<h3 className="mb-4 text-xl font-semibold text-primary">Full book illustration projects</h3>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Project type</TableHead>
								<TableHead>Details</TableHead>
								<TableHead>Price range</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{fullBookProjects.map((row) => (
								<TableRow key={row.type}>
									<TableCell className="font-medium">{row.type}</TableCell>
									<TableCell>{row.details}</TableCell>
									<TableCell>{row.price}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h3 className="mb-4 text-xl font-semibold text-primary">Individual illustrations</h3>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Type</TableHead>
									<TableHead>Price</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{individualIllustrations.map((row) => (
									<TableRow key={row.type}>
										<TableCell className="font-medium">{row.type}</TableCell>
										<TableCell>{row.price}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
					<div>
						<h3 className="mb-4 text-xl font-semibold text-primary">Book covers</h3>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Type</TableHead>
									<TableHead>Price</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{bookCovers.map((row) => (
									<TableRow key={row.type}>
										<TableCell className="font-medium">{row.type}</TableCell>
										<TableCell>{row.price}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h3 className="mb-3 text-xl font-semibold text-primary">What's included</h3>
						<ul className="space-y-2 text-muted-foreground">
							{included.map((item) => (
								<li key={item}>• {item}</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="mb-3 text-xl font-semibold text-primary">Payment & timeline</h3>
						<ul className="space-y-2 text-muted-foreground">
							<li>• 50% deposit to begin, 25% on sketch approval, 25% on final delivery</li>
							<li>• Timelines start after deposit and finalized scope</li>
							<li>• Rush fees available for tight deadlines</li>
							<li>• Extended usage rights available as add-ons</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
