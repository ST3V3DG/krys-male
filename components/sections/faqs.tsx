import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
}

const items: FaqItem[] = [
  {
    id: "faq-1",
    question: "how do your work with clients?",
    answer:
      "Working with me means embarking on a collaborative creative journey where your vision is my priority. I believe that genuine artistic support and personalized attention are essential to bringing your book cover to life in a way that truly resonates with your story and audience.",
  },
  {
    id: "faq-2",
    question: "do you use AI in your work?",
    answer:
      "I want to be crystal clear from the start : I do not use AI in any part of my creative process, and I do not accept AI-generated content like a book writing with it or a book promotion using it. Every illustration, every brushstroke, every color choice is made by my hand and guided by my artistic vision in collaboration with yours. You deserve authentic, original artwork created specifically for your book, not generic AI-generated images.",
  },
  {
    id: "faq-3",
    question: "why does the process matters?",
    answer:
      "This methodical approach ensures that every cover I create is thoughtfully crafted, genuinely original, and perfectly tailored to your book. You are not just getting an illustration; you are getting a partner who is invested in your success and committed to creating artwork that does justice to your story. My accompaniment throughout this process is not optional, it is fundamental to the quality and authenticity of the final product. I look forward to working with you and bringing your vision to life with artistry, integrity, and dedication.",
  },
];

const title = "Frequently asked questions";
const description = "Find answers to common questions about our products. Can't find what you're looking for? Contact me for more information.";

export function FaqsSection(){
  return (
    <section className="py-32 bg-primary/40">
      <div className=" max-w-6xl mx-auto px-6 space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold text-primary md:mb-4 lg:mb-6 lg:text-4xl">
            {title}
          </h2>
          <p className="text-muted lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="hover:text-primary cursor-pointer hover:no-underline">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};