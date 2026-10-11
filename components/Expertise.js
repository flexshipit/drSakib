import {
  Activity,
  Bone,
  Building2,
  Ribbon,
  ScanLine,
  Stethoscope,
} from "lucide-react";
import { expertise } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

const icons = {
  ribbon: Ribbon,
  stethoscope: Stethoscope,
  activity: Activity,
  bone: Bone,
  scan: ScanLine,
  building: Building2,
};

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Areas of expertise</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Four cancer focuses, plus laparoscopic surgery.
            </h2>
            <p className="max-w-md text-base leading-7 text-muted">
              These are the areas named in his practice. A visit starts with a
              consultation, and the hospital confirms the right next step.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-[1.5rem] bg-foam p-6 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-28px_rgba(18,32,51,0.45)]">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm ring-1 ring-line">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
