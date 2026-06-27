import PremadesCard from "@/components/premades-card";

export type PremadesGridProps = {
  price: string;
  imageSrc: string;
  imageAlt: string;
  priority: boolean;
};

export default function PremadesGrid({
  premades,
}: {
  premades: PremadesGridProps[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
      {premades.map((premade, index) => (
        <PremadesCard
          key={index}
          price={premade.price}
          imageSrc={premade.imageSrc}
          imageAlt={premade.imageAlt}
        />
      ))}
    </div>
  );
}
