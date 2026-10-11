"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, MapPin } from "lucide-react";
import { concerns, doctor } from "@/lib/profile";
import { Container, Eyebrow } from "@/components/ui";

const initial = { name: "", phone: "", concern: "", note: "" };

export default function Visit() {
  const formId = useId();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState(null);
  const [copied, setCopied] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    if (note) headingRef.current?.focus();
  }, [note]);

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Enter your full name.";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a phone number with at least 10 digits.";
    if (!values.concern) next.concern = "Choose an area of concern.";
    return next;
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setCopied(false);
    setNote({
      name: values.name.trim(),
      phone: values.phone.trim(),
      concern: values.concern,
      note: values.note.trim(),
    });
  }

  async function copyNote() {
    if (!note) return;
    const lines = [
      `Visit note for ${doctor.hospital}, ${doctor.city}`,
      `Name: ${note.name}`,
      `Phone: ${note.phone}`,
      `Concern: ${note.concern}`,
      note.note ? `Note: ${note.note}` : "",
      `Surgeon: ${doctor.name}, BMDC ${doctor.bmdc}`,
    ].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="visit" className="scroll-mt-24 bg-brand-deep py-20 text-white sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow light>Visit</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Plan a consultation in {doctor.city}.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/80 sm:text-lg">
            Appointments are confirmed at the hospital. Prepare a short visit
            note here, then take it to reception.
          </p>

          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-6 ring-1 ring-white/15">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              Chamber
            </p>
            <p className="mt-3 text-xl font-semibold">{doctor.hospital}</p>
            <p className="mt-1 text-white/80">{doctor.role}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
              <MapPin className="size-4" aria-hidden />
              {doctor.city}
            </p>
            <p className="mt-4 text-sm text-white/75">
              BMDC registration {doctor.bmdc}. Former service at{" "}
              {doctor.formerHospital}, {doctor.formerCity}.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white p-6 text-ink shadow-[0_30px_70px_-36px_rgba(0,0,0,0.45)] sm:p-8">
          {note ? (
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                <Check className="size-4" aria-hidden />
                Visit note ready
              </p>
              <h3
                tabIndex={-1}
                ref={headingRef}
                className="mt-3 text-2xl font-semibold tracking-tight outline-none"
              >
                {note.name}
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Phone</dt>
                  <dd className="font-medium">{note.phone}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Concern</dt>
                  <dd className="text-right font-medium">{note.concern}</dd>
                </div>
                {note.note ? (
                  <div>
                    <dt className="text-muted">Note</dt>
                    <dd className="mt-1 font-medium">{note.note}</dd>
                  </div>
                ) : null}
              </dl>
              <p className="mt-5 text-sm leading-6 text-muted">
                Show this note at reception of {doctor.hospital}, {doctor.city}.
                This page keeps it on your screen and does not send it to the
                hospital.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={copyNote}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-deep"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy visit note"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setNote(null);
                    setValues(initial);
                  }}
                  className="rounded-full px-5 py-3 text-sm font-semibold text-ink ring-1 ring-line hover:bg-foam"
                >
                  Start another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="text-2xl font-semibold tracking-tight">
                Prepare a visit note
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                For {doctor.hospital}, {doctor.city}.
              </p>

              <div className="mt-6 space-y-4">
                <Field
                  id={`${formId}-name`}
                  label="Full name"
                  error={errors.name}
                  value={values.name}
                  onChange={(value) => update("name", value)}
                  autoComplete="name"
                />
                <Field
                  id={`${formId}-phone`}
                  label="Phone"
                  error={errors.phone}
                  value={values.phone}
                  onChange={(value) => update("phone", value)}
                  autoComplete="tel"
                  inputMode="tel"
                />
                <div>
                  <label
                    htmlFor={`${formId}-concern`}
                    className="text-sm font-semibold text-ink"
                  >
                    Area of concern
                  </label>
                  <select
                    id={`${formId}-concern`}
                    value={values.concern}
                    onChange={(event) => update("concern", event.target.value)}
                    aria-invalid={Boolean(errors.concern)}
                    aria-describedby={errors.concern ? `${formId}-concern-error` : undefined}
                    className="mt-2 w-full appearance-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand"
                  >
                    <option value="">Select one</option>
                    {concerns.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.concern ? (
                    <p id={`${formId}-concern-error`} className="mt-1.5 text-sm text-rose">
                      {errors.concern}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor={`${formId}-note`}
                    className="text-sm font-semibold text-ink"
                  >
                    Note <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <textarea
                    id={`${formId}-note`}
                    rows={4}
                    maxLength={400}
                    value={values.note}
                    onChange={(event) => update("note", event.target.value)}
                    className="mt-2 w-full resize-y rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white hover:bg-brand-deep"
              >
                Create visit note
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function Field({ id, label, error, value, onChange, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-brand"
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose">
          {error}
        </p>
      ) : null}
    </div>
  );
}
