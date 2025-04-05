"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Locations from "@/components/contact/Locations";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <Locations />
    </main>
  );
}
