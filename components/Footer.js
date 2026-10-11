import { doctor, nav } from "@/lib/profile";
import { Container } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-semibold">{doctor.name}</p>
          <p className="mt-1 font-bengali text-sm text-white/70">{doctor.nameBn}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
            MBBS, BCS (Health), MS (Surgical Oncology), MCPS (Surgery).{" "}
            {doctor.title}. BMDC {doctor.bmdc}.
          </p>
          <p className="mt-3 text-sm text-white/75">
            {doctor.role}, {doctor.hospital}, {doctor.city}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-6">
        <p className="text-xs text-white/50">
          © 2026 {doctor.shortName}. BMDC {doctor.bmdc}.
        </p>
      </Container>
    </footer>
  );
}
