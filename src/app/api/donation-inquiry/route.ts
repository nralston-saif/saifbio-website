import { NextResponse, type NextRequest } from "next/server";

// Server-side proxy for the donate form. The browser posts here (same origin),
// and we forward the submission to the SAIFbio internal backend's public
// ingestion endpoint with a shared secret. Keeping this server-to-server means
// the secret never ships to the browser and there's no cross-origin/CORS dance.
export const dynamic = "force-dynamic";

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const ingestUrl = process.env.BIO_INQUIRY_INGEST_URL;
  const secret = process.env.DONATION_INQUIRY_INGEST_SECRET;
  if (!ingestUrl || !secret) {
    console.error(
      "Donation inquiry not configured: set BIO_INQUIRY_INGEST_URL and DONATION_INQUIRY_INGEST_SECRET"
    );
    return NextResponse.json(
      { error: "Donations form is temporarily unavailable. Please email us." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: the "website" field is visually hidden on the form, so a value
  // here means a bot. Pretend success and drop the submission.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  if (!name || !email) {
    return NextResponse.json(
      { error: "Please enter your name and email." },
      { status: 422 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const payload = {
    name,
    email,
    phone: str(body.phone),
    organization: str(body.organization),
    message: str(body.message),
  };

  // Don't let a slow/unreachable backend hang the request indefinitely.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(ingestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-inquiry-secret": secret,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(
        `Donation inquiry ingestion failed: ${res.status} ${res.statusText}`
      );
      return NextResponse.json(
        {
          error:
            "Sorry — we couldn't submit your inquiry. Please try again or email us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Donation inquiry proxy error:", err);
    return NextResponse.json(
      {
        error:
          "Sorry — we couldn't reach us right now. Please try again or email us directly.",
      },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
