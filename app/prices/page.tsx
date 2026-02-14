"use client";

import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactLenis, type LenisRef } from "lenis/react";
import {
  ComparePricesSection,
  type SpecsGroupsType,
} from "@/components/sections/compare-prices";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const pricingTiersSpecsGroups: SpecsGroupsType = [
  {
    title: "PRICING TIERS ( for indies Authors )",
    specs: [
      {
        name: "Illustration Type",
        values: [
          "Single character",
          "Complex illustrations",
          "Complex illustrations",
        ],
      },
      { name: "Characters Included", values: ["1", "3+", "3+"] },
      { name: "Background", values: ["Simple", "Detailed", "Detailed"] },
      { name: "Moodboards", values: [false, true, true] },
      { name: "Moodboards Count", values: ["0", "3", "4"] },
      { name: "Revisions", values: ["2", "5", "Unlimited"] },
      {
        name: "Files Included",
        values: ["Digital only", "Full print files", "Full print + sources"],
      },
      { name: "Social Media Mockups", values: [false, true, true] },
      { name: "Commercial Rights", values: [false, false, true] },
      { name: "Priority Turnaround", values: [false, true, true] },
    ],
  },
];

const servicesPackagesSpecsGroups: SpecsGroupsType = [
  {
    title: "SERIES PACKAGES (Save 10-20%)",
    specs: [
      {
        name: "Number of Covers",
        values: ["2", "3", "4+"],
      },
      {
        name: "Visual Style",
        values: [
          "Cohesive visual identity",
          "Unified aesthetic",
          "Strong visual continuity",
        ],
      },
      {
        name: "Branding",
        values: [
          "Series branding guide",
          "Series logo/branding elements",
          "Complete brand identity guide",
        ],
      },
      {
        name: "Character Design",
        values: [
          "Consistent character design",
          "Character style sheets",
          "Consistent character design",
        ],
      },
      {
        name: "Revisions per Cover",
        values: ["4", "4", "5"],
      },
      {
        name: "Social Media Kit",
        values: [false, "Template pack", "Extended kit"],
      },
      {
        name: "Moodboards",
        values: [false, false, "For entire series"],
      },
      {
        name: "Priority Scheduling",
        values: [false, false, true],
      },
      {
        name: "Bonus",
        values: [false, false, "Matching series boxset design"],
      },
    ],
  },
];

const addOnServices = [
  { service: "Character Design Sheet", price: "$50-100", description: "Reference sheet with multiple angles and expressions" },
  { service: "Animated Cover", price: "$80-200", description: "Subtle animation for social media (GIF/MP4)" },
  { service: "Alternate Covers", price: "30% off", description: "Special editions, seasonal variants" },
  { service: "Audiobook Cover Adaptation", price: "$40", description: "Reformatted for audiobook platforms" },
  { service: "Foreign Edition Adaptation", price: "$60", description: "Typography adjustment for translations" },
  { service: "Rush Delivery (1.5 week)", price: "+35%", description: "Expedited 1-week turnaround" },
  { service: "Rush Delivery (4 days)", price: "+20%", description: "Priority 3-day turnaround" },
  { service: "Extra Revisions", price: "$25-50 each", description: "Beyond included revision count" },
  { service: "Commercial Rights", price: "+$150-300", description: "For merchandise, extended marketing use" },
];

const packageInclusions = [
  "Source files upon full payment (+50% )",
  "Usage rights for book publication and standard marketing",
  "300 DPI high-resolution files",
  "Multiple file formats (JPG, PNG, PDF) (more fomats 25$ each )",
];

const importantNotes = [
  "Vector Illustrations: 20-30% lower than stated prices",
  "Hand-Drawn/Painted Illustrations: 20-30% higher than stated prices",
  "Customization: Final pricing may vary within each range based on project complexity",
  "Payment Plans: Available for series packages (50% upfront, 50% on completion)",
  "Early Booking Discount: 10% off when booking 2+ months in advance",
];

const AddOnServicesTable = () => (
  <section className="py-32">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">ADD-ON SERVICES</h2>
      <div className="max-w-4xl mx-auto">
        <div className="border border-secondary rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-secondary">
                <TableHead>Service</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {addOnServices.map((service, index) => (
                <TableRow className="border-y border-secondary" key={index}>
                  <TableCell className="font-semibold">{service.service}</TableCell>
                  <TableCell>{service.price}</TableCell>
                  <TableCell>{service.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  </section>
);

const InfoSection = ({ title, items, className }: { title: string; items: string[]; className?: string }) => (
  <section className={cn("py-32 bg-secondary/20", className)}>
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">{title}</h2>
      <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg border">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-sky-500 mr-4 mt-1">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="relative z-1 w-full">
        <Header />
        <main>
          <ComparePricesSection specsGroups={pricingTiersSpecsGroups} />
          <ComparePricesSection className="bg-secondary/20" specsGroups={servicesPackagesSpecsGroups} />
          <AddOnServicesTable />
          <InfoSection title="PACKAGE INCLUSIONS (ALL TIERS)" items={packageInclusions} />
          <InfoSection className="pt-0" title="IMPORTANT NOTES" items={importantNotes} />
        </main>
      </div>
      <Footer />
    </>
  );
}
