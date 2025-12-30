"use client";

import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  gsap.registerPlugin(useGSAP);

  const tlRef = useRef<gsap.core.Timeline>(null);
  const heroImage = useRef<HTMLImageElement>(null);

  tlRef.current = gsap.timeline();

  useGSAP(() => {
    tlRef.current?.to(heroImage.current, {
        xPercent: 1,
        ease: "power1.inOut",
      })
      .to(heroImage.current, {
        xPercent: -1,
        ease: "power1.inOut",
      })
      .to(heroImage.current, {
          xPercent: 1,
          ease: "power1.inOut",
        })
      .to(heroImage.current, {
          xPercent: 0,
          ease: "power1.inOut",
        })
      .to(heroImage.current, {
        scale: 1.1,
        duration: 2.5,
        ease: "elastic.out(0.5)",
      })
      .to(heroImage.current, {
        filter: "blur(8px)",
      }, "<")
      .to(heroImage.current, {
        filter: "blur(0px)",
      }, "-=1.5");
  });

  return (
    <section className="h-dvh overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          className="object-cover object-center size-full scale-120 blur-xs"
          alt="Hero Image"
          width={1600}
          height={1200}
          ref={heroImage}
          priority
        />
    </section>
  );
};
