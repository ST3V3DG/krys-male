import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
};

export const testimonials: TestimonialItem[] = [
  {
    name: "John Doe",
    role: "CEO",
    company: "ABC Company",
    avatar: "/images/avatars/john-doe.png",
    rating: 4.5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ultrices enim. Mauris ut erat non nulla ultrices aliquam. Sed ut semper nisi, nec accumsan nisl. Donec vitae lacinia nisi. Nullam eget nisl in turpis feugiat aliquam.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    company: "XYZ Company",
    avatar: "/images/avatars/jane-doe.png",
    rating: 4.5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ultrices enim. Mauris ut erat non nulla ultrices aliquam. Sed ut semper nisi, nec accumsan nisl. Donec vitae lacinia nisi. Nullam eget nisl in turpis feugiat aliquam.",
  },
  {
    name: "Bob Smith",
    role: "Developer",
    company: "123 Company",
    avatar: "/images/avatars/bob-smith.png",
    rating: 4.5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ultrices enim. Mauris ut erat non nulla ultrices aliquam. Sed ut semper nisi, nec accumsan nisl. Donec vitae lacinia nisi. Nullam eget nisl in turpis feugiat aliquam.",
  },
  {
    name: "Alice Lee",
    role: "Designer",
    company: "456 Company",
    avatar: "/images/avatars/alice-lee.png",
    rating: 4.5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ultrices enim. Mauris ut erat non nulla ultrices aliquam. Sed ut semper nisi, nec accumsan nisl. Donec vitae lacinia nisi. Nullam eget nisl in turpis feugiat aliquam.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/20 py-8 sm:py-16 lg:py-24">
      <Carousel
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-11 px-4 sm:px-6 md:grid-cols-2 lg:px-8"
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        {/* Left Content */}
        <div className="space-y-4 md:space-y-16">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm font-normal">
              Testimonials
            </Badge>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl lg:text-4xl">
              Trusted by leaders from various industries
            </h2>
            <p className="text-muted-foreground text-xl">
              From career changes to dream jobs, here&apos;s how Shadcn Studio
              helped.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <CarouselPrevious
              variant="default"
              className="disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100"
            />
            <CarouselNext
              variant="default"
              className="disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100"
            />
          </div>
        </div>

        {/* Right Testimonial Carousel */}
        <div className="relative">
          <CarouselContent className="sm:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:pl-6">
                <div className="flex flex-col gap-10">
                  <div className="space-y-2">
                    <p className="h-14 text-9xl text-primary">&ldquo;</p>
                    <p className="text-muted-foreground text-xl font-medium sm:text-2xl lg:text-3xl">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="size-12 rounded-full">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="rounded-full text-sm">
                        {testimonial.name
                          .split(" ", 2)
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <h4 className="text-lg font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
