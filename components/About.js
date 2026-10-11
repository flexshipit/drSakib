import Image from "next/image";
import { MapPin } from "lucide-react";
import { degrees, doctor } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-foam py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-36px_rgba(18,32,51,0.45)] ring-1 ring-black/5">
              <Image
                src="/images/award.jpg"
                alt="Dr. S. M. Sakib Kabir receiving recognition as 2nd Best Speaker at the Young Investigator Session of the 19th SFO and BICC 2024."
                width={1024}
                height={576}
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[16/10] w-full object-cover object-[28%_center]"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                  19th SFO &amp; BICC
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  2nd Best Speaker, Young Investigator Session
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <Eyebrow>About the surgeon</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              A practice built around careful cancer surgery.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {doctor.name} — {doctor.nameBn} — is a cancer surgery and
              laparoscopic surgery specialist. He consults at {doctor.hospital}
              , {doctor.city}, and previously served at the {doctor.formerHospital}
              , {doctor.formerCity}.
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Breast, stomach, colorectal, and sarcoma surgery are the areas he
              names in his practice. At the 19th SFO &amp; BICC meeting in 2024,
              organized by the Oncology Club, he presented selection criteria
              for recurrent soft tissue sarcoma of the extremities.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {degrees.map((item) => (
                <div
                  key={item.short}
                  className="rounded-2xl bg-white px-4 py-4 ring-1 ring-line"
                >
                  <dt className="text-lg font-semibold tracking-tight text-ink">
                    {item.short}
                  </dt>
                  <dd className="mt-1 text-sm text-muted">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-line sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              Current practice
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
              {doctor.hospital}
            </h3>
            <p className="mt-2 text-muted">{doctor.role}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
              <MapPin className="size-4 text-brand" aria-hidden />
              {doctor.city}
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-line sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Former
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
              {doctor.formerHospital}
            </h3>
            <p className="mt-2 text-muted">National cancer institute service</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
              <MapPin className="size-4 text-brand" aria-hidden />
              {doctor.formerCity}
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
