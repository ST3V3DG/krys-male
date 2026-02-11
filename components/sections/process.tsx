import { Asterisk, CornerDownRight } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";

const title = "My Process";

const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime amet dolorem eum est voluptatem id repellendus ut laborum laboriosam debitis.";

const buttonText = "Get in touch";

const process = [
  {
    step: "01",
    title: "Getting to Know You and Your Story",
    description:
      "Our journey begins with a conversation. We will discuss your story, your characters, your vision, and what you hope to achieve with your cover. This initial discussion happens via WhatsApp Business or any communication platform you prefer. This is where I get to understand not just what you need, but who you are as an author and what makes your story unique.",
  },
  {
    step: "02",
    title: "The Creative Brief",
    description:
      "Once we have established a connection, I will send you a detailed creative brief to complete. This document is crucial. It allows you to articulate your vision, preferences, reference points, and any specific requirements you have. I will carefully analyze your brief to ensure that I am the right fit for your project and that I can deliver exactly what you envision. This is where I decide whether to accept the project, because I only take on work that I know I can execute with excellence and authenticity.",
  },
  {
    step: "03",
    title: "Moodboards and Visual Direction",
    description:
      "After accepting your project, I will prepare comprehensive moodboards that capture the artistic direction for your cover. These visual guides will help us align on the aesthetic, mood, color palette, and overall style before any illustration work begins. This step ensures we are both on the same page and prevents any surprises down the line.",
  },
  {
    step: "04",
    title: "Drawing Tests",
    description:
      "Once the visual direction is approved, I move into the drawing phase. I create sketch tests and composition studies based on the package you have chosen. This is where your characters and scenes begin to take shape. You will have the opportunity to review these tests and provide feedback to ensure everything aligns with your vision.",
  },
  {
    step: "05",
    title: "Colorization Tests",
    description:
      "After the drawing phase is finalized, I proceed to colorization tests. Depending on your chosen package, you will receive color studies and rendering samples. This step brings your cover to life with the final color palette, lighting, and atmospheric elements that make your cover stand out.",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "When everything has been approved and refined to perfection, I deliver your final files. You will receive high-resolution, print-ready artwork in all necessary formats, along with any additional assets included in your package such as social media mockups or promotional materials.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-32">
      <div className=" max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-16 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-4xl font-semibold tracking-tight lg:text-5xl">
              {" "}
              <h1 className="w-fit text-primary">{title}</h1>
              <Asterisk className="absolute top-0 -right-2 size-5 text-secondary md:size-10 lg:-right-14" />
            </div>
            <p className="text-base text-foreground/50">
              {description}
            </p>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <CornerDownRight className="text-primary" />
              {buttonText}
            </Button>
          </div>
          <ul className="relative col-span-4 w-full lg:pl-22">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute top-4 right-0" />

                <div className="flex size-16 items-center justify-center rounded-full bg-secondary px-8 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        className="stroke-secondary"
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        strokeWidth="4"
      />
      <line
        className="stroke-secondary"
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        strokeWidth="4"
      />
    </svg>
  );
};
