"use client"

import { Tilt } from "@/components/ui/tilt";
import Image from "next/image";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  title,
  description,
  imageSrc,
  imageAlt,
  priority
}: {
  className?: string;
  title: string;
  description: string;
  imageSrc: string;
    imageAlt: string;
  priority?: boolean
}) {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, {
    amount: 0.8,
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const contentOverlayClasses = [
    "absolute",
    "inset-0",
    "flex",
    "flex-col",
    "items-start",
    "justify-end",
    "transition-opacity",
    "duration-300",
    isMobile
      ? inView
        ? "opacity-100"
        : "opacity-0"
      : "opacity-0 hover:opacity-100",
  ].join(" ");

  return (
    <Tilt className={cn("mb-4", className)} rotationFactor={8} isRevese>
      <div
        ref={cardRef}
        className="relative grid w-full grid-rows-2 overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 rounded-lg"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          priority={priority || false}
          className="row-span-2 object-cover size-full"
        />
        <h2 className="leading-snug text-black p-2 text-sm md:text-lg lg:text-xl dark:text-white">
          {title}
        </h2>
        <div className={contentOverlayClasses}>
          <div className="w-full bg-zinc-950/80 p-4 backdrop-blur-sm h-full flex flex-col justify-center gap-8">
            <p className="leading-snug text-zinc-50 text-2xl">
              {title}
            </p>
            <p className="text-zinc-400">{description}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
