import { PremadesTabs } from "@/components/premades-tabs";

const heading = "Des spécialités diverses et variées";
const description =
  "Nous vous mettons entre les mains d'experts en tout genre.";

export function PremadesSection() {
  return (
    <section className="py-32 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 font-bold md:mb-4 text-5xl lg:mb-6 text-primary">
            {heading}
          </h2>
          <p className="mb-8 lg:text-lg text-muted-foreground">{description}</p>
        </div>
          <PremadesTabs />
      </div>
    </section>
  );
}
