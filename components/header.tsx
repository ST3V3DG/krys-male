"use client"

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('bg-white', 'shadow');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.add('bg-transparent');
          header.classList.remove('bg-white', 'shadow');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
   return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 return (
    <header className="fixed top-0 right-0 bg-transparent left-0 z-50 py-4 px-6 transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-serif font-bold text-xl tracking-tight md:text-2xl text-primary">Krysmale</Link>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            <Link href="/" className="hover:text-white transition duration-300 ease-in-out relative before:absolute before:top-0 before:left-0 before:h-full before:w-0 hover:before:w-full before:transition-all before:bg-primary/50 before:z-[-1] before:content-[''] px-2">Home</Link>
            <Link href="/" className="hover:text-white transition duration-300 ease-in-out relative before:absolute before:top-0 before:left-0 before:h-full before:w-0 hover:before:w-full before:transition-all before:bg-primary/50 before:z-[-1] before:content-[''] px-2">Features</Link>
            <Link href="/" className="hover:text-white transition duration-300 ease-in-out relative before:absolute before:top-0 before:left-0 before:h-full before:w-0 hover:before:w-full before:transition-all before:bg-primary/50 before:z-[-1] before:content-[''] px-2">Culture</Link>
            <Link href="/" className="hover:text-white transition duration-300 ease-in-out relative before:absolute before:top-0 before:left-0 before:h-full before:w-0 hover:before:w-full before:transition-all before:bg-primary/50 before:z-[-1] before:content-[''] px-2">Style</Link>
            <Link href="/" className="hover:text-white transition duration-300 ease-in-out relative before:absolute before:top-0 before:left-0 before:h-full before:w-0 hover:before:w-full before:transition-all before:bg-primary/50 before:z-[-1] before:content-[''] px-2">About</Link>
          </nav>

          <Button className="p-2 md:hidden" aria-label="Toggle menu">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  )
}