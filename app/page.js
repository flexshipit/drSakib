import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Recognition from "@/components/Recognition";
import Awareness from "@/components/Awareness";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import { doctor } from "@/lib/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  honorificPrefix: "Dr.",
  medicalSpecialty: ["Surgical Oncology", "Laparoscopic Surgery"],
  identifier: `BMDC ${doctor.bmdc}`,
  hospitalAffiliation: {
    "@type": "Hospital",
    name: `${doctor.hospital}, ${doctor.city}`,
  },
  knowsLanguage: ["en", "bn"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-blush text-rose">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-2.5 text-sm sm:px-8">
          <p>
            <span className="font-semibold">Pink October.</span> Breast cancer
            awareness from {doctor.shortName}.
          </p>
          <a href="#awareness" className="shrink-0 font-semibold underline-offset-4 hover:underline">
            Read the note
          </a>
        </div>
      </div>
      <Header />
      <main id="content">
        <div className="bg-white">
          <Hero />
          <Marquee />
        </div>
        <About />
        <Expertise />
        <Recognition />
        <Awareness />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
