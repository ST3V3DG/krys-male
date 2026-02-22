import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "@/components/contact-button";
import { Button } from "@/components/ui/button";
import Floating, { FloatingElement } from "@/components/parallax-floating";

export function HeroSection() {
  return (
    <section className="py-6 h-svh">
      <div className="mx-auto max-w-6xl px-6 grid size-full relative place-content-center">
        <div className="absolute inset-0 -z-1">
          <Floating className="size-full relative" sensitivity={0.2}>
            <FloatingElement className="absolute -z-1 top-12 right-[6vw] h-60 rounded-lg aspect-2/3">
              <Image
                className="size-full object-cover"
                alt="hero image"
                src="/images/hoods.webp"
                width={400}
                height={800}
              />
            </FloatingElement>
            <FloatingElement className="absolute -z-1 top-16 left-[6vw] h-60 aspect-2/3">
              <div>
                <Image
                  className="size-full object-cover"
                  alt="hero image"
                  src="/images/tallya.webp"
                  width={400}
                  height={800}
                />
              </div>
            </FloatingElement>
            <FloatingElement className="absolute -z-1 bottom-8 left-[8vw] h-54 aspect-2/3">
              <div>
                <Image
                  className="size-full object-cover"
                  alt="hero image"
                  src="/images/lunear.webp"
                  width={400}
                  height={800}
                />
              </div>
            </FloatingElement>
            <FloatingElement className="absolute -z-1 bottom-8 right-[8vw] h-54 aspect-2/3">
              <div>
                <Image
                  className="size-full object-cover"
                  alt="hero image"
                  src="/images/lunear.webp"
                  width={400}
                  height={800}
                />
              </div>
            </FloatingElement>
          </Floating>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-7xl max-w-2xl text-center text-primary">
            Give live to your history
          </h1>
          <p className="text-muted-foreground max-w-md text-pretty text-center">
            Make your readers feel like they are part of your story. I'm a
            talented writer and I'm passionate about bringing your stories to
            life.
          </p>
          <div className="flex gap-4 w-full justify-center items-center mt-6">
            <Button
              size="lg"
              variant="outline"
              className="ring-primary px-10 bg-background"
            >
              <Link className="text-primary" href="/about">
                Explore
              </Link>
            </Button>
            <ContactButton className="min-w-52">Contact me</ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
