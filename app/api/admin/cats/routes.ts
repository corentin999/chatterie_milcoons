// app/api/admin/cats/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const token = (await cookies()).get(process.env.JWT_COOKIE_NAME || "token")?.value;
  const body = await req.json();

  const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });

  const data = await r.json().catch(() => ({}));
  return NextResponse.json(data, { status: r.status });
}
