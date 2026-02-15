import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactButton({
  children,
  className,
  iconSize = 5,
}: { children?: React.ReactNode; className?: string; iconSize?: number }) {
  return (
    <Button
      className={cn(
        "contact-button-wrapper max-w-72 bg-primary rounded-full text-white hover:text-primary hover:bg-background hover:ring hover:ring-primary transition-all duration-300 px-0 h-12",
        className,
      )}
    >
      <Link className="flex items-center w-full justify-center p-2" href="/contact">
        <span arial-hidden="true" className="rounded-full size-8"></span>
        <span
          arial-hidden="true"
          className="text-lg text-center font-medium grow"
        >
          {children || "Contact"}
        </span>
        <span arial-hidden="true" className="rounded-full size-8"></span>
        <span
          arial-hidden="true"
          className="border border-white rounded-full p-2 absolute transition-all duration-300 flex items-center justify-center"
        >
          <ArrowUpRight size={iconSize} />
        </span>
      </Link>
    </Button>
  );
}
