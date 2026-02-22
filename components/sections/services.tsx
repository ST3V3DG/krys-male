"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

type Service = {
  title: string;
  image: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Editorial Illustration",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
  },
  {
    title: "Book Cover Design",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
  },
  {
    title: "Character design",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
  },
  {
    title: "Book stickers",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
  },
  {
    title: "City or imaginary world maps",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h1 className="mb-4 text-4xl font-medium text-primary md:text-6xl">
              Featured Services
            </h1>
            <p className="w-72 text-base tracking-tight text-muted-foreground">
              We offer comprehensive digital solutions to help your business
              grow. From web development to mobile apps, we deliver quality
              results that exceed expectations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {services.slice(0, 2).map((service, index) => (
            <motion.a
              key={index}
              href={`#${service.title}`}
              whileHover={{ opacity: 0.8 }}
              className="group block overflow-hidden rounded-xl"
            >
              <Card className="relative aspect-square overflow-hidden p-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={600}
                  width={600}
                  className="absolute inset-0 size-full object-cover"
                />
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white capitalize">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-6 right-6 size-6 text-white transition-transform group-hover:scale-110" />
              </Card>
            </motion.a>
          ))}

          <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
            {services.slice(2).map((service, index) => (
              <motion.a
                key={index}
                href={`#${service.title}`}
                whileHover={{ opacity: 0.8 }}
                className="group block overflow-hidden rounded-xl"
              >
                <Card className="relative aspect-4/3 overflow-hidden p-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    height={600}
                    width={600}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                    <div className="pr-4 font-semibold text-white">
                      {service.title}
                    </div>
                  </CardContent>
                  <ArrowUpRight className="absolute top-6 right-6 size-6 text-white transition-transform group-hover:scale-110" />
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailsSection() {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  const serviceSectionRef = useRef(null);
  const q = gsap.utils.selector(serviceSectionRef);
  let matchMedia = gsap.matchMedia();

  useGSAP(
    () => {
      matchMedia.add("(width < 48rem)", () => {
        q(".description-block").forEach((element, index) => {
          ScrollTrigger.create({
            trigger: element,
            endTrigger: q(".image-block")[index],
            pin: true,
            scrub: 1,
            start: "center center",
            end: "bottom 80%",
          });
        });
      });
    },
    { scope: serviceSectionRef },
  );

  return (
    <section className="py-32 bg-background" ref={serviceSectionRef}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
        {services.map((service) => {
          return (
            <div
              id={service.title}
              key={service.title}
              className="w-full h-min"
            >
              <ServicePresenter service={service} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ServicePresenter({ service }: { service: Service }) {
  return (
    <>
      <h2 className="text-primary text-center text-5xl mt-24 mb-14 capitalize">
        {service.title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <Card className="relative aspect-square overflow-hidden p-0 image-block w-full max-w-lg">
          <Image
            src={service.image}
            alt={service.title}
            className="absolute inset-0 size-full object-cover"
            width={600}
            height={600}
          />
        </Card>
        <div className="description-block grow">
          <p className="text-balance">{service.description}</p>
        </div>
      </div>
    </>
  );
}
