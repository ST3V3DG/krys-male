"use client";

import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactLenis, type LenisRef } from "lenis/react";
import {
  ComparePricesSection,
  type SpecsGroupsType,
} from "@/components/sections/compare-prices";
import { InfoSection } from "@/components/sections/info-section";
import { AddOnServicesTableSection } from "@/components/sections/add-on-services-table-section";

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

export default function Prices() {
  const lenisRef = useRef<LenisRef>(null);
  return (
    <>
      <ReactLenis root ref={lenisRef} />
      <div className="relative z-1 w-full">
        <Header />
        <main>
          <ComparePricesSection specsGroups={pricingTiersSpecsGroups} />
          <ComparePricesSection className="bg-secondary/20" specsGroups={servicesPackagesSpecsGroups} />
          <AddOnServicesTableSection />
          <InfoSection title="PACKAGE INCLUSIONS (ALL TIERS)" items={packageInclusions} />
          <InfoSection className="pt-0" title="IMPORTANT NOTES" items={importantNotes} />
        </main>
      </div>
      <Footer />
    </>
  );
}
