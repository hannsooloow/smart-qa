import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    company?: string;
    name?: string;
    email?: string;
    stage?: string;
    interest?: string;
    challenge?: string;
  };

  if (!body.company || !body.name || !body.email || !body.challenge) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    lead: {
      company: body.company,
      name: body.name,
      email: body.email,
      stage: body.stage ?? "",
      interest: body.interest ?? "",
      challenge: body.challenge,
    },
  });
}