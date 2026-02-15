import { PremadesTabs } from "@/components/premades-tabs";

const heading = "Des spécialités diverses et variées";
const description =
  "Nous vous mettons entre les mains d'experts en tout genre.";

export function PremadesSection() {
  return (
    <section className="py-32 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        <div className="flex justify-between *:max-w-md">
          <h1 className="mb-3 font-bold md:mb-4 text-4xl lg:mb-6 text-primary sm:text-5xl md:text-7xl">
            {heading}
          </h1>
          <p className="mb-8 lg:text-lg text-muted-foreground">{description}</p>
        </div>
          <PremadesTabs />
      </div>
    </section>
  );
}
