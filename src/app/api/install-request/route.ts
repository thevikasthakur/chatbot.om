import { NextResponse } from "next/server";
import { handleInstallRequestEmail } from "@/lib/install-request-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const result = await handleInstallRequestEmail(body);
  return NextResponse.json(result.body, { status: result.status });
}
