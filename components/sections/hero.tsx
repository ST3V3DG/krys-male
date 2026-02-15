import Image from "next/image";
import { ContactButton } from "@/components/contact-button";
import { Tilt } from "@/components/ui/tilt";

export function HeroSection() {
  return (
    <section className="py-6 h-svh">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 grid-rows-12 gap-4 lg:grid-cols-7 lg:grid-rows-1 h-full relative">
        <div className="absolute -z-1 animate-floating delay-200 top-12 right-[6vw] rotate-4 h-36 aspect-2/3">
          <Tilt isRevese>
            <div>
              <Image
                className="size-full object-cover"
                alt="hero image"
                src="/images/hoods.webp"
                width={400}
                height={800}
              />
            </div>
          </Tilt>
        </div>
        <div className="absolute -z-1 animate-floating delay-700 top-60 right-[12vw] -rotate-4 h-44 aspect-2/3">
          <Tilt isRevese>
            <div>
              <Image
                className="size-full object-cover"
                alt="hero image"
                src="/images/tallya.webp"
                width={400}
                height={800}
              />
            </div>
          </Tilt>
        </div>
        <div className="absolute -z-1 animate-floating delay-[1.5s] bottom-20 left-[8vw] -rotate-4 h-48 aspect-2/3">
          <Tilt isRevese>
            <div>
              <Image
                className="size-full object-cover"
                alt="hero image"
                src="/images/lunear.webp"
                width={400}
                height={800}
              />
            </div>
          </Tilt>
        </div>
        <div className="lg:col-span-2 max-lg:row-span-2 lg:pt-12 flex flex-col justify-end lg:justify-between">
          <h1 className="text-4xl text-balance font-bold tracking-tight text-primary sm:text-5xl md:text-7xl">
            Give live to your history
          </h1>
          <ContactButton className="mt-8">Contact me</ContactButton>
        </div>
        <div className="lg:col-span-3 max-lg:row-span-8 relative z-2">
          <svg
            className="absolute top-0 left-0"
            width="250"
            height="500"
            viewBox="0 0 250 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-primary scale-50"
              d="M2.5 502.5V2.5H252.5"
              strokeWidth="4"
            />
          </svg>
          <Image
            className="size-full object-cover"
            alt="hero image"
            src="/images/main-character.webp"
            width={400}
            height={800}
          />
          <span className="font-gambarino w-full text-end absolute left-1/2 bottom-0 p-1 translate-x-[-50%] text-background">
            KRY-MALE
          </span>
          <svg
            className="absolute scale-[-1] bottom-0 right-0"
            width="250"
            height="500"
            viewBox="0 0 250 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-primary scale-50"
              d="M2.5 502.5V2.5H252.5"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="lg:col-span-2 max-lg:row-span-2 flex flex-col lg:justify-end">
          <div className="flex flex-col gap-2 max-lg:px-2 text-primary bg-background">
            <p className="text-xl font-medium text-foreground">
              Make your readers feel like they are part of your story.
            </p>
            <p className="text-xl font-medium text-foreground">
              I'm a talented writer and I'm passionate about bringing your
              stories to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
