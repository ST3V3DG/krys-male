import PremadesGrid from "@/components/premades-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PremadesGridProps } from "./premades-grid";

type TabProps = {
  name: string;
  value: string;
  content: PremadesGridProps[];
};

const tabs: TabProps[] = [
	{
		name: "100€-150€",
		value: "100-150",
		content: [
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/1.png",
				imageAlt: "premade de 100€ numéro 1",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/2.png",
				imageAlt: "premade de 100€ numéro 2",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/3.jpg",
				imageAlt: "premade de 100€ numéro 3",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/4.png",
				imageAlt: "premade de 100€ numéro 4",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/5.png",
				imageAlt: "premade de 100€ numéro 5",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/6.png",
				imageAlt: "premade de 100€ numéro 6",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/7.png",
				imageAlt: "premade de 100€ numéro 7",
				priority: true,
			},
			{
				price: "100€",
				imageSrc: "/images/premades/100-150/100/8.png",
				imageAlt: "premade de 100€ numéro 8",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/1.png",
				imageAlt: "premade de 120€ numéro 1",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/2.png",
				imageAlt: "premade de 120€ numéro 2",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/3.png",
				imageAlt: "premade de 120€ numéro 3",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/4.png",
				imageAlt: "premade de 120€ numéro 4",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/5.png",
				imageAlt: "premade de 120€ numéro 5",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/6.png",
				imageAlt: "premade de 120€ numéro 6",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/7.png",
				imageAlt: "premade de 120€ numéro 7",
				priority: true,
			},
			{
				price: "120€",
				imageSrc: "/images/premades/100-150/120/8.png",
				imageAlt: "premade de 120€ numéro 8",
				priority: true,
			},
			{
				price: "150€",
				imageSrc: "/images/premades/100-150/150/1.png",
				imageAlt: "premade de 150€ numéro 1",
				priority: true,
			},
			{
				price: "150€",
				imageSrc: "/images/premades/100-150/150/2.png",
				imageAlt: "premade de 150€ numéro 2",
				priority: true,
			},
			{
				price: "150€",
				imageSrc: "/images/premades/100-150/150/3.png",
				imageAlt: "premade de 150€ numéro 3",
				priority: true,
			},
			{
				price: "150€",
				imageSrc: "/images/premades/100-150/150/4.png",
				imageAlt: "premade de 150€ numéro 4",
				priority: true,
			},
			{
				price: "150€",
				imageSrc: "/images/premades/100-150/150/5.png",
				imageAlt: "premade de 150€ numéro 5",
				priority: true,
			},
			{
				price: "150€",
				imageSrc: "/images/premades/100-150/150/6.png",
				imageAlt: "premade de 150€ numéro 6",
				priority: true,
			},
		],
  },
  {
    name: "175€-200€",
    value: "175-200",
    content: [
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/1.png",
				imageAlt: "premade de 175€ numéro 1",
				priority: false,
      },
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/2.png",
				imageAlt: "premade de 175€ numéro 2",
				priority: false,
      },
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/3.png",
				imageAlt: "premade de 175€ numéro 3",
				priority: false,
      },
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/4.png",
				imageAlt: "premade de 175€ numéro 4",
				priority: false,
      },
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/5.png",
				imageAlt: "premade de 175€ numéro 5",
				priority: false,
      },
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/6.png",
				imageAlt: "premade de 175€ numéro 6",
				priority: false,
      },
      {
				price: "175€",
				imageSrc: "/images/premades/175-200/175/7.png",
				imageAlt: "premade de 175€ numéro 7",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/1.png",
				imageAlt: "premade de 200€ numéro 1",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/2.png",
				imageAlt: "premade de 200€ numéro 2",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/3.png",
				imageAlt: "premade de 200€ numéro 3",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/4.png",
				imageAlt: "premade de 200€ numéro 4",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/5.png",
				imageAlt: "premade de 200€ numéro 5",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/6.png",
				imageAlt: "premade de 200€ numéro 6",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/7.png",
				imageAlt: "premade de 200€ numéro 7",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/8.png",
				imageAlt: "premade de 200€ numéro 8",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/9.png",
				imageAlt: "premade de 200€ numéro 9",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/10.png",
				imageAlt: "premade de 200€ numéro 10",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/11.png",
				imageAlt: "premade de 200€ numéro 11",
				priority: false,
      },
      {
				price: "200€",
				imageSrc: "/images/premades/175-200/200/12.png",
				imageAlt: "premade de 200€ numéro 12",
				priority: false,
      },
    ],
	}
];

export function PremadesTabs() {
	return (
		<Tabs defaultValue="100-150" className="gap-4">
			<TabsList className="bg-background rounded-none border-b p-0 w-full">
				{tabs.map((tab) => (
					<TabsTrigger
						key={tab.value}
						value={tab.value}
						className="bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent shadow data-[state=active]:shadow-none cursor-pointer"
					>
						{tab.name}
					</TabsTrigger>
				))}
			</TabsList>

			{tabs.map((tab) => (
				<TabsContent key={tab.value} value={tab.value}>
					<PremadesGrid premades={tab.content} />
				</TabsContent>
			))}
		</Tabs>
	);
}
