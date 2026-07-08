"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const inputClass =
  "w-full rounded-md border bg-card px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 disabled:opacity-60";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  message: "",
  // Honeypot — visually hidden; humans leave it blank, bots fill it in and
  // the API silently drops the submission.
  website: "",
};

export function DonationInquiryForm() {
  const [values, setValues] = useState({ ...EMPTY });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const update =
    (field: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/donation-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setError(
          data.error ?? "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues({ ...EMPTY });
    } catch {
      setError("We couldn't reach the server. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Thank you — we&rsquo;ll be in touch</CardTitle>
          <CardDescription className="mt-2 text-[0.95rem] leading-relaxed">
            Your message has reached the SAIFbio team. We&rsquo;ll follow up by
            email shortly to help arrange your gift.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Send us a note</CardTitle>
        <CardDescription className="mt-2 text-[0.95rem] leading-relaxed">
          Leave your details and the SAIFbio team will follow up by email.
          Required fields are marked with an asterisk.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={update("website")}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                className={inputClass}
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                className={inputClass}
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={update("phone")}
                className={inputClass}
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="organization" className={labelClass}>
                Organization / DAF name
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                autoComplete="organization"
                value={values.organization}
                onChange={update("organization")}
                className={inputClass}
                disabled={status === "submitting"}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Anything else we should know?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={update("message")}
              className={inputClass}
              disabled={status === "submitting"}
            />
          </div>

          {status === "error" && error && (
            <p
              role="alert"
              className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              {error}
            </p>
          )}

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send to the SAIFbio team"}
            </button>
            <p className="text-sm text-muted-foreground">
              We&rsquo;ll only use this to follow up about your gift.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
