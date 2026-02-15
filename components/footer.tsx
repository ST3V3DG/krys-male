import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-background lg:sticky lg:bottom-0 lg:left-0 lg:right-0 focus-within:outline-none">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
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
            <p className="text-muted-foreground mb-6 max-w-md">
              A curated magazine exploring design, culture, and thoughtful
              living. We showcase stories that inspire and connect.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-primary text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="hover:text-primary text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                className="hover:text-primary text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wider uppercase">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Style
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wider uppercase">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" max-w-6xl mx-auto px-6 border-t">
        <div className="flex flex-col items-center justify-between py-6 md:flex-row">
          <p className="text-muted-foreground mb-4 text-sm md:mb-0">
            &copy; {new Date().getFullYear()} Krysmale. All rights reserved.
          </p>
          <Button className="group inline-flex items-center text-sm font-medium cursor-pointer text-white rounded-full bg-primary">
            Back to top
            <ArrowUp className="ml-1 transition duration-300 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
