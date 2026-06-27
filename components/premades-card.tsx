import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function PremadesCard({
  price,
  imageSrc,
  imageAlt,
  priority,
}: {
  price: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
}) {

  return (
    <Card className="border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 flex flex-col"
    >
      <CardContent
        className="w-full rounded-lg p-4 grow">
        <div className="overflow-hidden rounded-md size-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            priority={priority || false}
            className="object-cover size-full"
          />
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <h2 className="leading-snug text-black p-2 text-sm md:text-lg lg:text-xl dark:text-white">
          {price}
        </h2>
      </CardFooter>
    </Card>
  );
}
