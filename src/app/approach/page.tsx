"use client";

import ApproachHero from "@/components/approach/ApproachHero";
import ProcessSection from "@/components/approach/ProcessSection";
import ValuesSection from "@/components/approach/ValuesSection";
import ContactCTA from "@/components/approach/ContactCTA";
import FAQSection from "@/components/approach/FaqSection";

export default function ApproachPage() {
  return (
    <main className="bg-white">
      <ApproachHero />
      <ProcessSection />
      <ValuesSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
