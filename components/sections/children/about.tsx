import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const title = "All you have to know about me";

const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam, quia, sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam, quia, sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae.";

const paragraph2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam, quia, sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam, quia, sit minus, quod debitis autem quia aspernatur delectus impedit modi, neque non id ad dignissimos? Saepe deleniti perferendis beatae.";

export function AboutSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto  max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl lg:text-5xl text-pretty font-medium">
            {title}
          </h2>
          <div className="space-y-6">
            <p className="first-letter:ml-4">
              {paragraph1}
            </p>
            <p className="first-letter:ml-4">
              {paragraph2}
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
