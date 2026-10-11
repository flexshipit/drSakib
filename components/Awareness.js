import Image from "next/image";
import { doctor, quote } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Awareness() {
  return (
    <section id="awareness" className="scroll-mt-24 bg-blush py-20 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <figure className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-36px_rgba(155,44,74,0.45)] ring-1 ring-rose/10">
            <Image
              src="/images/pink-october.jpg"
              alt="Pink October breast cancer awareness poster with a message from Dr. Sakib Kabir, cancer surgery specialist for Khulna and Dhaka."
              width={1024}
              height={610}
              sizes="(min-width: 1024px) 540px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <Eyebrow>Pink October</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Breast cancer awareness, in his own words.
          </h2>
          <blockquote
            lang="bn"
            className="mt-6 font-bengali text-2xl font-semibold leading-relaxed text-ink sm:text-[1.7rem]"
          >
            “{quote.bn}”
          </blockquote>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{quote.en}</p>
          <p
            lang="bn"
            className="mt-6 font-bengali text-sm leading-7 text-rose"
          >
            {doctor.nameBn} · {quote.practiceBn}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
