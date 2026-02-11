"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  gsap.registerPlugin(useGSAP);

  const tlRef = useRef<gsap.core.Timeline>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);

  tlRef.current = gsap.timeline();

  useGSAP(() => {
    tlRef.current
      ?.to(heroImageRef.current, {
        filter: "blur(4px)",
      })
      .to(
        heroImageRef.current,
        {
          xPercent: -1,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        heroImageRef.current,
        {
          scale: 1.1,
          duration: 1,
        },
        "<",
      )
      .to(heroImageRef.current, {
        scale: 1.15,
        duration: 2.5,
        ease: "elastic.out(0.5)",
      })
      .to(
        heroImageRef.current,
        {
          filter: "blur(2px)",
        },
        "<",
      )
      .to(
        heroImageRef.current,
        {
          xPercent: 1,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        heroImageRef.current,
        {
          xPercent: -1,
          ease: "power1.inOut",
        },
        "-=1.5",
      )
      .to(
        heroImageRef.current,
        {
          xPercent: 0,
          ease: "power1.inOut",
        },
        "-=1",
      )
      .to(
        heroImageRef.current,
        {
          scale: 1.1,
          duration: 2.5,
          ease: "elastic.out(0.5)",
        },
        "-=1.1",
      )
      .to(
        heroImageRef.current,
        {
          filter: "blur(4px)",
        },
        "<",
      )
      .to(
        heroImageRef.current,
        {
          filter: "blur(0px)",
        },
        "-=1.5",
      )
      .to(
        overlayRef.current,
        {
          opacity: 0.8,
          duration: 0.1,
        },
        "-=0.8"
      )
      .to(heroImageRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power4.out",
      }, "<")
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5")
      .to(heroImageRef.current, {
        scale: 1.15,
        duration: 1,
        ease: "power1.out",
      }, "<");
  });

  return (
    <section className="lg:h-dvh overflow-hidden relative">
      <Image
        src="/images/children/hero-bg.png"
        className="object-cover object-center w-full scale-120 blur-[2px]"
        alt="Hero Image"
        width={1600}
        height={1200}
        ref={heroImageRef}
        // layout="responsive"
        priority
      />
      <div
        className="absolute inset-0 bg-white opacity-0 pointer-events-none"
        ref={overlayRef}
      />
    </section>
  );
}
