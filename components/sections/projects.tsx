"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { Tilt } from "@/components/ui/tilt";

export function ProjectsSection() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef || !wrapperRef) {
      return;
    }

    gsap.to(wrapperRef.current, {
      xPercent: -70,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      }
    });
  });

  return (
    <section className="h-lvh" ref={containerRef}>
      <div className="relative w-[300vw] flex items-center justify-center h-full" ref={wrapperRef}>
        <h2 className="text-nowrap text-primary w-full text-[20vw] font-bold text-center pointer-events-none capitalize">Book Cover & Illustrations</h2>
        <Tilt className="absolute w-48 top-20 left-40 -z-1" isRevese>
          <div>
            <Image alt="project" className="size-full object-cover" height={400} src="/images/hoods.webp" width={200} />
          </div>
        </Tilt>
        <Tilt className="absolute w-48 bottom-12 left-200" isRevese>
          <div>
            <Image alt="project" className="size-full object-cover" height={400} src="/images/lunear.webp" width={200} />
          </div>
        </Tilt>
        <Tilt className="absolute w-48 bottom-2/5 left-360 -z-1" isRevese>
          <div>
            <Image alt="project" className="size-full object-cover" height={400} src="/images/black-guy.png" width={200} />
          </div>
        </Tilt>
        <Tilt className="absolute w-48 bottom-14 right-400" isRevese>
          <div>
            <Image alt="project" className="size-full object-cover" height={400} src="/images/lunear.webp" width={200} />
          </div>
        </Tilt>
        <Tilt className="absolute w-48 top-18 right-200 -z-1" isRevese>
          <div>
            <Image alt="project" className="size-full object-cover" height={400} src="/images/black-guy.png" width={200} />
          </div>
        </Tilt>
        <Tilt className="absolute w-48 bottom-24 right-44" isRevese>
          <div>
            <Image alt="project" className="size-full object-cover" height={400} src="/images/tallya.webp" width={200} />
          </div>
        </Tilt>
      </div>
    </section>
  );
}
