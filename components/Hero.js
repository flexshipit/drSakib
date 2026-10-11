import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { degrees, doctor, quote } from "@/lib/profile";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,124,116,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm shadow-sm ring-1 ring-line">
            <span className="flex text-amber-400" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="font-medium text-ink">5-star listing</span>
            <span className="text-muted">· 2 ratings</span>
          </p>

          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl">
            Care that sees
            <span className="mt-1 block text-brand">the light of hope.</span>
          </h1>

          <p
            lang="bn"
            className="mt-5 max-w-lg font-bengali text-lg leading-relaxed text-muted"
          >
            {quote.bn.split("।")[0]}।
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {doctor.name} is a {doctor.title.toLowerCase()} and{" "}
            {doctor.role.toLowerCase()} at {doctor.hospital}, {doctor.city}.
            His practice covers breast, stomach, colorectal, and sarcoma
            surgery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(14,124,116,0.95)] transition-colors hover:bg-brand-deep"
            >
              Plan a visit
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:bg-foam"
            >
              View credentials
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {degrees.map((item) => (
              <li
                key={item.short}
                className="rounded-full bg-foam px-3 py-1.5 text-xs font-semibold tracking-wide text-ink ring-1 ring-line"
              >
                {item.short}
              </li>
            ))}
            <li className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand">
              BMDC {doctor.bmdc}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-8 -z-10 rounded-full bg-brand/10 blur-3xl" aria-hidden />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-36px_rgba(14,124,116,0.65)] ring-1 ring-black/5">
            <Image
              src="/images/podium.jpg"
              alt="Dr. S. M. Sakib Kabir speaking at the 19th SFO BICC 2024, organized by the Oncology Club."
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                BMDC registered
              </p>
              <p className="text-sm font-semibold text-ink">{doctor.bmdc}</p>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                Young Investigator Session
              </p>
              <p className="mt-1 font-semibold leading-snug text-ink">
                2nd Best Speaker · 19th SFO &amp; BICC 2024
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
