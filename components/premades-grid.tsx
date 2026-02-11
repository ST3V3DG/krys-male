import Card from "@/components/premades-card";

type PremadesGridProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  priority: boolean;
};

export default function PremadesGrid({ premades }: { premades: PremadesGridProps[] }) {

  return (
    <>
      {premades.map((premade, index) => (
        <Card
          key={index}
          title={premade.title}
          description={premade.description}
          imageSrc={premade.imageSrc}
          imageAlt={premade.imageAlt}
        />
      ))}
    </>
  );
}
