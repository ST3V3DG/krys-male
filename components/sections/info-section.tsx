import { cn } from "@/lib/utils";

export function InfoSection({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <section className={cn("py-32 bg-secondary/20", className)}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg border">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sky-500 mr-4 mt-1">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
