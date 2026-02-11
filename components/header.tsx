"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ContactButton } from "@/components/contact-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/children", label: "Children" },
  { href: "/services", label: "Services" },
  { href: "/premades", label: "Premades" },
  { href: "/prices", label: "Prices" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(max-width: 1023px)").matches) {
        return;
      }
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add(
            "bg-background",
            "shadow",
            "backdrop-blur-2xl",
          );
          header.classList.remove("lg:bg-transparent");
        } else {
          header.classList.add("lg:bg-transparent");
          header.classList.remove(
            "bg-background",
            "shadow",
            "backdrop-blur-2xl",
          );
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="sticky lg:fixed top-0 right-0 bg-background lg:bg-transparent w-full z-50 transition duration-300 py-2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <Image
                className="-ml-2 size-16"
                src={"/images/logo.png"}
                width={80}
                height={80}
                alt="logo"
                priority
              />
              <span className="text-lg md:text-xl font-bold text-primary font-gambarino">
                KRYS-MALE
              </span>
            </Link>
          </div>

          <nav className="hidden items-center lg:flex text-primary font-medium font-gambarino">
            <ul className="items-center gap-6 flex h-full">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition duration-300 px-4 size-full relative before:absolute before:-inset-2 before:w-[calc(100%+16px)] before:transition-all before:z-[-1] before:content-[''] before:rounded-full ${pathname === link.href ? "before:w-[calc(100%+16px)] before:bg-background before:border before:border-primary" : "hover:text-white hover:before:scale-100 before:bg-primary before:scale-0"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ContactButton
              className="h-10 w-fit [&_span:not(:nth-child(2))]:hidden ml-4 px-4 [&_span]:text-base"
              iconSize={4}
            >
              Contact
            </ContactButton>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                className="rounded-full bg-transparent cursor-pointer p-0 group transition duration-300"
                aria-label="Toggle menu"
              >
                <Menu className="stroke-primary group-hover:stroke-background size-8 transition duration-300" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center">
                    <Link className="flex items-center" href="/">
                      <Image
                        className="-ml-2 size-12"
                        src={"/images/logo.png"}
                        width={80}
                        height={80}
                        alt="logo"
                        priority
                      />
                      <span className="text-lg md:text-xl font-bold text-primary font-gambarino">
                        KRYS-MALE
                      </span>
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to the menu by tapping the icon. Click on the menu
                  items to navigate to the respective pages.
                </SheetDescription>
              </SheetHeader>
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li className="basis-14 px-4" key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary font-medium size-full flex items-center border-b border-secondary"
                      key={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
