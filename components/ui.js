export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "text-white/80" : "text-brand"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${light ? "bg-white" : "bg-brand"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}
