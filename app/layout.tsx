import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krysmale | Portfolio",
  description: "I am an illustrator and I design book covers for my clients to highlight the emotion conveyed by the book.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
