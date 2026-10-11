"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { gallery } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Recognition() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="recognition" className="scroll-mt-24 bg-foam py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Conferences</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            19th SFO &amp; BICC 2024
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            He presented selection criteria for a study of recurrent soft tissue
            sarcoma of the extremities, based on review by the multidisciplinary
            tumour board at the National Institute of Cancer Research &amp;
            Hospital. The session named him 2nd Best Speaker.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <PhotoButton item={gallery[0]} onOpen={setActive} tall />
          </Reveal>
          <div className="grid gap-4 lg:col-span-2">
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-brand p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                  Young Investigator Session
                </p>
                <div>
                  <p className="text-6xl font-semibold tracking-[-0.04em]">2nd</p>
                  <p className="mt-2 text-lg font-semibold">Best Speaker</p>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    19th SFO &amp; BICC 2024, organized by the Oncology Club.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <PhotoButton item={gallery[1]} onOpen={setActive} />
            </Reveal>
          </div>
        </div>
      </Container>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <figure
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 inline-flex size-10 items-center justify-center rounded-full bg-white text-ink"
            >
              <span className="sr-only">Close image</span>
              <X className="size-5" />
            </button>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-sm text-white">
              <span className="font-semibold">{active.title}. </span>
              {active.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}

function PhotoButton({ item, onOpen, tall = false }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group block h-full w-full overflow-hidden rounded-[1.5rem] text-left ring-1 ring-black/5"
    >
      <span className="relative block h-full">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="(min-width: 1024px) 640px, 100vw"
          className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
            tall ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[28rem]" : "aspect-video"
          }`}
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-5 text-white">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
            {item.kicker}
          </span>
          <span className="mt-1 block text-base font-semibold">{item.title}</span>
        </span>
      </span>
    </button>
  );
}
