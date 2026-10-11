import { marquee } from "@/lib/profile";

export default function Marquee() {
  const loop = [...marquee, ...marquee];

  return (
    <section
      aria-hidden="true"
      className="marquee relative z-20 -mt-2 h-16 overflow-hidden sm:h-[4.5rem]"
    >
      <div className="absolute left-1/2 top-1/2 w-[145%] -translate-x-1/2 -translate-y-1/2 -rotate-2 overflow-hidden bg-brand py-3 text-white shadow-[0_16px_40px_-20px_rgba(8,78,73,0.85)]">
        <div className="marquee-track flex w-max items-center">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-6 px-3 text-sm font-semibold tracking-wide"
            >
              {item}
              <span className="size-1.5 rounded-full bg-white/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
