import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

type Feature = {
  heading: string;
  description: string;
  icon: React.ReactNode;
};

const title = "Services Offerts";
const features: Feature[] = [
  {
    heading: "Quality",
    description:
      "Built with attention to detail and best practices. Every component is thoroughly tested and follows modern React patterns for reliability and performance.",
    icon: <GitPullRequest className="size-6" />,
  },
  {
    heading: "Experience",
    description:
      "Crafted with user experience in mind. Each component is designed to be intuitive, accessible, and provide smooth interactions across all devices.",
    icon: <SquareKanban className="size-6" />,
  },
  {
    heading: "Support",
    description:
      "Comprehensive documentation and community support. Get help when you need it with detailed guides, examples, and active community assistance.",
    icon: <RadioTower className="size-6" />,
  },
  {
    heading: "Innovation",
    description:
      "Cutting-edge design patterns and modern web technologies. Stay ahead with the latest trends in UI/UX design and development practices.",
    icon: <WandSparkles className="size-6" />,
  },
  {
    heading: "Results",
    description:
      "Proven track record of successful implementations. These components have been battle-tested in real-world applications and deliver consistent results.",
    icon: <Layers className="size-6" />,
  },
  {
    heading: "Efficiency",
    description:
      "Optimized for performance and developer productivity. Lightweight, fast-loading components that help you build faster without compromising on quality.",
    icon: <BatteryCharging className="size-6" />,
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-secondary/20">
      <div className=" max-w-6xl mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-medium text-pretty lg:text-5xl">
            {title}
          </h2>
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
