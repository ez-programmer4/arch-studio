"use client";

import StudioHero from "@/components/studio/StudioHero";
import TeamSection from "@/components/studio/TeamSection";
import ValuesSection from "@/components/studio/ValuesSection";
import StudioEnvironment from "@/components/studio/StudioEnvironment";
import ContactCTA from "@/components/studio/ContactCTA";

export default function StudioPage() {
  return (
    <main className="bg-white">
      <StudioHero />
      <StudioEnvironment />
      <TeamSection />
      <ValuesSection />
      <ContactCTA />
    </main>
  );
}
